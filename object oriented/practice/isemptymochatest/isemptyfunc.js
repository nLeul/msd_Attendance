"use strict";
/**
 * @param  {object} obj we have object as our parameter
 * @returns{boolean} returning if the proprty is there or not
 */
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}