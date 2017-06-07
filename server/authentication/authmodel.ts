import * as ORM from "Sequelize";
import {Sequelize} from 'Sequelize';
import {connectionString, config} from "../config/connectionString";
import {initAuthModel} from "./initAuthModel";


const sequelize: Sequelize = new ORM(config.Beta.ApikeyDb, config.Beta.Uid, config.Beta.Pass, {
    dialect: 'mssql',
    host: config.Beta.Host,
    dialectOptions: {
        port: config.Beta.Port,
    }
});

export const AuthModel = initAuthModel(sequelize);