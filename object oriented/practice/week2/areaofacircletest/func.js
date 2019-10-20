"use strict";
const circle={
    radius:10,
    /**
     * @param{object} takes an object
     * @returns{number} number will be
     */
    area:function(){
        return(3*this.radius*this.radius);
    },
    /**
     * @param{object}
     * @returns{number}
     */
    circum:function(){
        return(3*2*this.radius);
    }
};