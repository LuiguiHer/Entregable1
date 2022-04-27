const {Sequelize} = require('sequelize');
const datadb = require('./credentials');


// export of credentials
const uri = datadb.host;
const username = datadb.username;
const password = datadb.password;
const database = datadb.database;

const db = new Sequelize({
    dialect: 'postgres',
    host: uri,
    username: username,
    password: password,
    database: database,
    port: 5432,
    logging: false
});





module.exports = db;
