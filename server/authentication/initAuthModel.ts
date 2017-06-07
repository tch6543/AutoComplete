
import {Sequelize} from 'Sequelize';
import * as ORM from "Sequelize";

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
