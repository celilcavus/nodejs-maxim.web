const database = require('mysql2');

const context = database.createConnection({
    host:"localhost",
    user:"root",
    password:"celil123",
    database:"maxim"
});

module.exports = context.promise();