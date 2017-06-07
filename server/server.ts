
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

/*AutoResult.findAll().then(result => console.log(JSON.stringify(result)));*/

/*const AutoResult = sequelize.define('AutoCompleteTbl', {
    id: { type: ORM.UUID, primaryKey: true},
    title: ORM.STRING
},{
    tableName: 'Test_SG_AutoComplete',
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true
});

sequelize.query('SELECT TOP 2 * FROM Test_SG_AutoComplete', { type: sequelize.QueryTypes.SELECT, model: AutoResult}).then(function(result){
    /!*console.log(result);*!/
    AutoResult.find().then(result2 => console.log(result2))
});*/

import {AutoCompleteModel} from "./model/model";
import {Application} from "express";
import * as express from 'express';
import {initRestApi} from "./api/api";
import {apiErrorHandler} from "./api/apiErrorHandler";
import * as dotenv from 'dotenv';
import {initCache} from "./cache-provider";
import {authenticateKey} from "./authentication/index";

const bodyParser = require('body-parser');

initCache();

const app: Application = express();

/*app.use((req, res, next) =>{
    const tempenv = dotenv.config({path: './server/config/beta-connectionstring.env'});

    console.log(process.env.DB_USER);

    next();
});*/

app.use(bodyParser.json());

app.use(authenticateKey);

initRestApi(app);

app.use(apiErrorHandler);

/*app.route('api/autocomplete').get((req,res)=>{
    res.status(200).json({"massage": 'Hellow'});

    /!*AutoCompleteModel.findAll()
        .then(result => {
            res.status(200).json({result});
        });*!/
})*/

app.listen(8099, () => {
    console.log("Server is running at 8099..... ");
});

/*AutoCompleteModel.findAll().then(result => console.log(JSON.stringify(result)));*/
