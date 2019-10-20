// filter function
function ownFilterVersion(arr,fun){
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i])){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
//filter return type is true or false
function iseven(n,index,arr) {
    return n%2==0;
}
let new_even=ownFilterVersion([1,2,3,4,5],iseven);
console.log(new_even);
//
function mapOwnVersion(arr,fun) {
    let new_map=[];
    for(let i=0;i<arr.length;i++){
       new_map.push(fun(arr[i]));
    }

    return new_map;
}
function mapdivide(item) {
    return item/2;
}
let mapme=mapOwnVersion([1,2,4,6],mapdivide);
console.log(mapme);


function ReduceVersion(arr,fun) {
    let acc=arr[0];
    for(let i=1;i<arr.length;i++){
        acc=fun(acc,arr[i]);
    }
    return acc;
}
function concatenation(acc,item) {

    return acc+item;
}
let reduce=ReduceVersion([1,2,3,5],concatenation);
console.log(reduce);

function forEachown(arr,fun) {
    for(let i=0;i<arr.length;i++){
        fun(arr[i]);
    }
}
function multipltbytwo(item) {
    console.log(item*2);
}
forEachown([0,9,5,4],multipltbytwo);