'use strict';

const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const UserModel = require('./userModel');

const XLSXModelData = sequelize.define('xlsxModelData', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        require: true
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        validate: {
            notEmpty: true
        }
    },
    forWho:{
        type: DataTypes.TEXT("tiny"),
        allowNull: false,
        require: true,
        validate: {
            notEmpty: true
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT("long"),
        allowNull: false
    },
    hashTags: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    }
});

XLSXModelData.belongsTo(UserModel, { foreignKey: 'user' });
module.exports = XLSXModelData;