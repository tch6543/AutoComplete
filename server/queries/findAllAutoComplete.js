"use strict";
var model_1 = require("../model/model");
model_1.AutoCompleteModel.findAll().then(function (result) { return console.log(JSON.stringify(result)); });
