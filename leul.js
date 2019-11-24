let fuculty={
    fullName:"Levi",
    age:55
}
Object.freeze(fuculty);
let fucltArr=[];
let stdArr=[];

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
//console.log(fucltArr);

function hash(key){
     let string = key + "";
     let prime = 37; 
     let sum = 0;
 for (let i = 0; i < string.length; i++) { 
     sum += string.charCodeAt(i); 
     }  
    return sum * prime; 
}

class Person{
    constructor(fname,age){
       this.fullName=fname;
       this.age=age;
       this.id=hash(fname);
    }
    setFullName(name){
        this.fullName=name;
    }
    setAge(age){
        this.age=age;
    }
    getFullName(){
        return this.fullName;
    }
    getAge(){
        return this.age;
    }
    getId(){
        return this.id;
    }
}

class Student extends Person{
    constructor(name,age,dep){
        super(name,age);
        this.department=dep;
        this.attendance=0;
        this.teacher=fucltArr;
    }
    setDepartment(dep){
        this.department=dep;
    }
    getDepartement(){
        return this.department;
    }
    getTeachers(){
        return this.teacher;
    }

    setAttendance(){
        ++this.attendance;
    }
    getAttendance(){
        return this.attendance;
    }

}

let fnameIn=document.getElementById("fname");
let ageIn=document.getElementById("age");
let depIn=document.getElementById("dep");
let addBTN=document.getElementById("addBtn");

     addBTN.addEventListener("click",function(){
         let promises=new Promise(function(resolve,reject){
             if(depIn.value.toUpperCase()=="MSD"){
                 let newStd=new Student(fnameIn.value, parseInt(ageIn.value), depIn.value);
                 stdArr.push(newStd);
                 setTimeout(()=>resolve("your registration is successfull, and your id is => "+newStd.getId()),1000);
                 setTimeout(()=>alert(newStd.getTeachers()[0].fullName+" accept your registraton  => and I am Your "+newStd.getTeachers()[0].department,3000));
                 setTimeout(()=>alert(newStd.getTeachers()[1].fullName+" accept your registraton  => and I am Your "+newStd.getTeachers()[1].department,5000));
             }else{
                setTimeout(()=>reject("your registration is declined."),1000);
             }
         });
         promises.then(alert).catch(alert);
     });

 let idBTN=document.getElementById("idBtn");
 let stdIdIn=document.getElementById("stdId");  
 
      idBTN.addEventListener("click",function(){
          let promises=new Promise(function(resolve,reject){
                 let stdId=parseInt(stdIdIn.value);
                 let stdObj=null,count=0;
                 console.log(typeof stdId+"  "+stdId);
                 for(let std of stdArr){
                     if(std.getId() == stdId){
                         
                         stdObj=std;
                         count++;
                         break;
                     }
                 }
                 if(stdObj == null){
                    setTimeout(()=>reject("your Id is not correct, please check it."),1000);
                 }else{
                     stdObj.setAttendance();
                     stdArr[count]=stdObj;
                     setTimeout(()=>alert(stdObj.getTeachers()[0].fullName+" accept your attendance  => and I am Your "+stdObj.getTeachers()[0].department,3000));
                     setTimeout(()=>alert(stdObj.getTeachers()[1].fullName+" accept your attendance  => and I am Your "+stdObj.getTeachers()[1].department,5000));
                     setTimeout(()=>resolve("your Attendance is successfull, and your total day is => "+stdArr[count].getAttendance(),1000));
                 }
          });
          promises.then(alert).catch(alert);
      });
