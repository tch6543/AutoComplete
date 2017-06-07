"use strict";
var ORM = require("Sequelize");
function initAuthModel(sequelize) {
    return sequelize.define('AuthTbl', {
        Id: { type: ORM.INTEGER, primaryKey: true },
        Token: ORM.UUID,
        Name: ORM.STRING,
        ApplicationCodes: ORM.BIGINT
    }, {
        tableName: 'ApiKey',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
}
exports.initAuthModel = initAuthModel;
