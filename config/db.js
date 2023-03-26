'use strict';

const { Sequelize } = require('sequelize');

// Import database configuration from Json data
const { dataBase_Name, dataBase_User, password, host, dialect, port } = require('./dbCredentials.json').dbData;

// Initialize Sequelize with database connection details
const sequelize = new Sequelize(dataBase_Name, dataBase_User, password, {
    host,
    dialect,
    port,
    logging: false
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err) => {
        console.log('Database connection failed:', err);
    });

module.exports = sequelize;