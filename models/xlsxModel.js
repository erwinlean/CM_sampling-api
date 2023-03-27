'use strict';

const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const userModel = require("./userModel");

const XLSXModelData = sequelize.define('xlsxModelData', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        require: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        require: true,
        references: {
            model: UserModel,
            key: 'id'
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

XLSXModelData.belongsTo(userModel, { foreignKey: 'userId' });

module.exports = XLSXModelData;