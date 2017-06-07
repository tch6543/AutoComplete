"use strict";
var _ = require("lodash");
var appSetting_1 = require("../config/appSetting");
var connectionString_1 = require("../config/connectionString");
var ORM = require("Sequelize");
;
var sequelize2 = new ORM(connectionString_1.config.Beta.ApikeyDb, connectionString_1.config.Beta.Uid, connectionString_1.config.Beta.Pass, {
    dialect: 'mssql',
    host: connectionString_1.config.Beta.Host,
    dialectOptions: {
        port: connectionString_1.config.Beta.Port,
    }
});
function getApiDetail(key) {
    /*return AuthModel.findOne({
     where: {ApplicationCodes: appSetting.Global.ApplicationCode}
     }).then(_.partial(isValidKey, key))
     .catch(error => false);*/
    /*.then(_.partial(isValidKey, key))*/
    return sequelize2.query('SELECT TOP 1 Token FROM ApiKey WHERE ApplicationCodes = :key ', { replacements: { key: appSetting_1.appSetting.Global.ApplicationCode }, type: sequelize2.QueryTypes.SELECT })
        .then(_.partial(isValidKey, key))
        .catch(function (error) { return false; });
}
exports.getApiDetail = getApiDetail;
;
function isValidKey(key, data) {
    /* console.log(`data: ${data[0].Token}`);
     console.log(`key: ${key}`);*/
    if (data[0].Token == key) {
        /*        console.log(data);
                console.log("key: " + key);*/
        return (true);
    }
    else {
        return (false);
    }
}
;
