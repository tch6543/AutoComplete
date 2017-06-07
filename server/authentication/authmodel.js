"use strict";
var ORM = require("Sequelize");
var connectionString_1 = require("../config/connectionString");
var initAuthModel_1 = require("./initAuthModel");
var sequelize = new ORM(connectionString_1.config.Beta.ApikeyDb, connectionString_1.config.Beta.Uid, connectionString_1.config.Beta.Pass, {
    dialect: 'mssql',
    host: connectionString_1.config.Beta.Host,
    dialectOptions: {
        port: connectionString_1.config.Beta.Port,
    }
});
exports.AuthModel = initAuthModel_1.initAuthModel(sequelize);
