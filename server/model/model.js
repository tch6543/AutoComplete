"use strict";
var ORM = require("sequelize");
var initAutoCompleteModel_1 = require("./initAutoCompleteModel");
var connectionString_1 = require("../config/connectionString");
var sequelize = new ORM(connectionString_1.connectionString.BETA_AUTOCOMPLETEDB, connectionString_1.connectionString.BETA_UID, connectionString_1.connectionString.BETA_PWD, {
    dialect: 'mssql',
    host: connectionString_1.connectionString.BETA_HOSTNAME,
    dialectOptions: {
        port: connectionString_1.connectionString.PORT,
    }
});
/*const sequelize:Sequelize = new ORM('autocompletedb','devlogin','devlogin01',{
    dialect: 'mssql',
    host: 'betadb01',
    dialectOptions: {
        port: 3457
    }
});*/
exports.AutoCompleteModel = initAutoCompleteModel_1.initAutoCompleteModel(sequelize);
