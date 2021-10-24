const db = require('../db');

module.exports = class User {
    constructor(id, name, username, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
    }

    save() {
        const query = 'INSERT INTO user VALUES (?, ?, ?, ?);';
        const values = [this.id, this.name, this.username, this.password];
        return db.query({ sql: query, values });
    }

    static findUserByUsername(username) {
        const query = 'SELECT id, username, password FROM user WHERE username = ?';
        const values = [username];
        return db.query({ sql: query, values });
    }

    static findUserById(id) {
        const query = `SELECT user.id, user.name, username, password, role.name as role 
        FROM user 
        LEFT JOIN (role, user_role) 
        ON (user_role.user_id = user.id AND user_role.role_id = role.id) 
        WHERE user.id = ?;`;

        const values = [id];
        return db.query({ sql: query, values });
    }

    assignRole(roleId) {
        const query = 'INSERT INTO user_role VALUES (?, ?);';
        const values = [this.id, roleId];
        return db.query({ sql: query, values });
    }
}