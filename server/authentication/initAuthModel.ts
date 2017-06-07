
import {Sequelize} from 'sequelize';
import * as ORM from "sequelize";

export function initAuthModel(sequelize: Sequelize){
    return sequelize.define('AuthTbl', {
        Id: { type: ORM.INTEGER, primaryKey: true},
        Token: ORM.UUID,
        Name: ORM.STRING,
        ApplicationCodes: ORM.BIGINT
    }, {
        tableName: 'ApiKey',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
}
