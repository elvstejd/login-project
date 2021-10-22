const sqlite3 = require('sqlite3');
const fs = require('fs')

const openMode = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE;
let db = new sqlite3.Database('./db/database.db', openMode, err => {
    if (err) {
        console.log(err.message);
    } else {
        const createTableRole = fs.readFileSync('./db/crear-tabla-rol.sql').toString();
        const createTableUser = fs.readFileSync('./db/crear-tabla-usuario.sql').toString();
        db.run(createTableRole, [], err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Tabla rol creada');
            }
        });
        db.run(createTableUser, [], err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Tabla user creada');
            }
        });
    }
})

module.exports = db;
