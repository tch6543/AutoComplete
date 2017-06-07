/*import * as ORM from "Sequelize";
import {Sequelize} from 'Sequelize';
import {ClusterSettings} from "cluster";

const sequelize:Sequelize = new ORM('AutoComplete','devlogin','12345',{
    dialect: 'mssql',
    host: '192.168.92.60',
    dialectOptions: {
        port: 3457
    }
});

const AutoResult = sequelize.define('AutoCompleteTbl', {
    id: { type: ORM.UUID, primaryKey: true},
    title: ORM.STRING,
    subtitle: ORM.STRING,
    FirstOrder: ORM.INTEGER,
    SecondOrder: ORM.INTEGER,
    ThirdOrder: ORM.INTEGER,
    label: ORM.STRING,
    kind: ORM.STRING,
    group: ORM.STRING,
    RefId: ORM.STRING,
    BuildingName: ORM.STRING,
    PropertyType: ORM.STRING,
    PropertyCategoryType : ORM.STRING,
    Category: ORM.STRING,
    Status: ORM.BOOLEAN,
    Country: ORM.STRING
}, {
    tableName: 'Test_SG_AutoComplete',
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true
});*/
"use strict";
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./api/apiErrorHandler");
var cache_provider_1 = require("./cache-provider");
var index_1 = require("./authentication/index");
var bodyParser = require('body-parser');
cache_provider_1.initCache();
var app = express();
/*app.use((req, res, next) =>{
    const tempenv = dotenv.config({path: './server/config/beta-connectionstring.env'});

    console.log(process.env.DB_USER);

    next();
});*/
app.use(bodyParser.json());
app.use(index_1.authenticateKey);
api_1.initRestApi(app);
app.use(apiErrorHandler_1.apiErrorHandler);
/*app.route('api/autocomplete').get((req,res)=>{
    res.status(200).json({"massage": 'Hellow'});

    /!*AutoCompleteModel.findAll()
        .then(result => {
            res.status(200).json({result});
        });*!/
})*/
app.listen(8099, function () {
    console.log("Server is running at 8099..... ");
});
/*AutoCompleteModel.findAll().then(result => console.log(JSON.stringify(result)));*/
