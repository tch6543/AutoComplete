"use strict";
var CacheObj = require("node-cache");
var model_1 = require("./model/model");
var _ = require("lodash");
var myCache = new CacheObj();
var isCached = false;
function initCache() {
    console.log("I am running ");
    if (myCache.get('all-autocomplete-detail')) {
    }
    else {
        myCache = new CacheObj({
            stdTTL: 100,
            checkperiod: 600
        });
    }
}
exports.initCache = initCache;
;
function getInstance() {
    return myCache;
}
exports.getInstance = getInstance;
/*export function getInstance():CacheObj{

    if(myCache.get('all-autocomplete-detail')){
        isCached = true;
    }else {
        isCached = false;
    }

    if(isCached){
        return returnCache();
    }else{
        processCache();

        console.log("waiting loop start.");

        while(!isCached){
            //console.log('waiting for result');
        };

        console.log("waiting loop stop.");

        return returnCache();
    }
}*/
function processCache() {
    getCacheData().then(function (result) {
        isCached = result;
    });
}
function returnCache() {
    return myCache;
}
function setCache(data) {
    console.log("setCache is running !");
    var result = myCache.set('all-autocomplete-detail', data);
    if (result) {
        return result;
    }
    else {
        return false;
    }
}
function getCacheData() {
    console.log("getCacheData is running !");
    return model_1.AutoCompleteModel.findAll()
        .then(_.partial(setCache));
}
