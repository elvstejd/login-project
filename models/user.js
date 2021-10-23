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

    static findPasswordByUsername(username) {
        const query = 'SELECT username, password FROM user WHERE username = ?';
        const values = [username];
        return db.query({ sql: query, values });
    }
}