"use strict";
var ORM = require("sequelize");
function initAutoCompleteModel(sequelize) {
    return sequelize.define('AutoCompleteTbl', {
        id: { type: ORM.UUID, primaryKey: true },
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
        PropertyCategoryType: ORM.STRING,
        Category: ORM.STRING,
        Status: ORM.BOOLEAN,
        Country: ORM.STRING
    }, {
        tableName: 'AutoComplete',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
}
exports.initAutoCompleteModel = initAutoCompleteModel;
