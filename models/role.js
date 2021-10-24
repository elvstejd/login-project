const db = require('../db');

module.exports = class Role {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    save() {
        const query = 'INSERT INTO role VALUES (?, ?);';
        const values = [this.id, this.name];
        return db.query({ sql: query, values });
    }

    static findAll() {
        const query = 'SELECT * FROM role;';
        return db.query({ sql: query });
    }
}