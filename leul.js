let fuculty={
    fullName:"Levi",
    age:55
}
Object.freeze(fuculty);
let fucltArr=[];

function newFultObj(fullName,age){
    return function(dep){
        let retuObj=Object.assign({},fuculty,{fullName : fullName,  age:age,  department : dep});
        return retuObj;
    }
}

function addFuculty(){
    let asaad = newFultObj("Asaad",32);
    let umur = newFultObj("Umur",30);

   fucltArr.push(asaad("Profesor"));
   fucltArr.push(umur("TA"));
}
addFuculty();
console.log(fucltArr);
