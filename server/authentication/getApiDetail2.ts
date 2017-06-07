import * as validator from 'validator';
import {AuthModel} from "./authmodel";
import * as _ from 'lodash';
import * as Bluebird from "bluebird";
import {appSetting} from "../config/appSetting";
import {Sequelize} from "sequelize";
import {config} from "../config/connectionString";
import * as ORM from "sequelize";


interface AuthTbl {
    Id: number,
    Token: string,
    Name: string,
    ApplicationCodes: number
};

const sequelize2: Sequelize = new ORM(config.Beta.ApikeyDb, config.Beta.Uid, config.Beta.Pass, {
    dialect: 'mssql',
    host: config.Beta.Host,
    dialectOptions: {
        port: config.Beta.Port,
    }
});

export function getApiDetail(key: string): Bluebird<boolean>{

    /*return AuthModel.findOne({
     where: {ApplicationCodes: appSetting.Global.ApplicationCode}
     }).then(_.partial(isValidKey, key))
     .catch(error => false);*/
    /*.then(_.partial(isValidKey, key))*/

    return sequelize2.query('SELECT TOP 1 Token FROM ApiKey WHERE ApplicationCodes = :key ',
        {replacements: { key: appSetting.Global.ApplicationCode }, type: sequelize2.QueryTypes.SELECT})
        .then(_.partial(isValidKey, key))
        .catch(error => false);


};


function isValidKey(key: string, data:any): boolean {
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
};

