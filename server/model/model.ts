

import * as ORM from "Sequelize";
import {Sequelize} from 'Sequelize';
import {initAutoCompleteModel} from "./initAutoCompleteModel";
import {connectionString} from "../config/connectionString";


const sequelize:Sequelize = new ORM(connectionString.BETA_AUTOCOMPLETEDB,connectionString.BETA_UID, connectionString.BETA_PWD,{
    dialect: 'mssql',
    host: connectionString.BETA_HOSTNAME,
    dialectOptions: {
        port: connectionString.PORT,
    }
});

/*const sequelize:Sequelize = new ORM('autocompletedb','devlogin','devlogin01',{
    dialect: 'mssql',
    host: 'betadb01',
    dialectOptions: {
        port: 3457
    }
});*/

export const AutoCompleteModel =  initAutoCompleteModel(sequelize);