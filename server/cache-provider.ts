import * as CacheObj from 'node-cache';
import {AutoCompleteModel} from "./model/model";
import * as _ from 'lodash';
import Bluebird = require("bluebird");

let myCache:CacheObj = new CacheObj();
let isCached:boolean = false;

export function initCache(){
    console.log(`I am running `);
    if(myCache.get('all-autocomplete-detail')){
    }else{
        myCache = new CacheObj({
            stdTTL:100,
            checkperiod: 600
        });
    }
};

export function getInstance():CacheObj{
    return myCache;
}

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

function processCache(){
    getCacheData().then((result) => {
        isCached = result;
    });
}

function returnCache() :CacheObj{
    return myCache;
}

function setCache(data:any):boolean{
    console.log(`setCache is running !`);
    var result = myCache.set('all-autocomplete-detail', data);
    if(result)
    {
        return result;
    }else{
        return false;
    }
}

function getCacheData():Bluebird<boolean>{
    console.log(`getCacheData is running !`);
    return AutoCompleteModel.findAll()
        .then(_.partial(setCache))
}