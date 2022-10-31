const { Sequelize } = require('sequelize');

//MySQL database connnection trough Sequalize. Passing parameters separately.
const dbConnect = new Sequelize(process.env.DB_DATABASE , process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = dbConnect;