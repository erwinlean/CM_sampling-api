'use strict';

const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');


const UserModel = sequelize.define('user', {
    id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

UserModel.hasMany(XLSXModelData); // to test the association of the users in both models of the DB
module.exports = UserModel;