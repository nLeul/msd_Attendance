/* eslint-disable indent */

let faculty = {
    fullname: null,
    age: 0
};
Object.freeze(faculty);
let facultyArr = [];
let studArr = [];

function FacultyObj(fullname, age) {

    return function (department) {
        let newObj = Object.assign({}, faculty, {
            fullname: fullname, age: age, department: department
        });
        return newObj;
    };
}
function addFuculty() {
    let assad = FacultyObj("Assad", 32);
    let Umuur = FacultyObj("umur", 25);
    facultyArr.push(assad("Proffesor"));
    facultyArr.push(Umuur("Teacher Assistant"));

}
addFuculty();
console.log(facultyArr);
let studentName = document.getElementById("name");
let departName = document.getElementById("dept");
console.log(studentName);
let studentAge = document.getElementById("age");
function hash(studentName) {
    let prime = 37;
    let sum = 0;
    for (let i = 0; i < studentName.length; i++) {
        sum += studentName.charCodeAt(i);
    }
    return sum * prime;
}
console.log(hash("abel"));
console.log(hash("abel"));



class Person {
    constructor(fullname, age) {
        this._fullName = fullname;
        this._age = age;
        this._id = hash(studentName);
    }
    setName(fullname) {
        this._fullName = fullname;

    }
    getName() {
        return this._fullName;
    }
    setAge(age) {
        this._age = age;
    }
    getAge() {
        return this._age;
    }

}

class Student extends Person {
    constructor(department, fullname, age) {
        super(fullname, age);
        this._department = department;
        this._attenCount = 0;
    }
    setDepartment(department) {
        this._department = department;
    }
    getDepartment() {
        return this._department;
    }
}


document.getElementById("addBtn").addEventListener("click", function () {
    let addStudent = new Promise((resolve, reject) => {
        let studentObj = new Student(departName.value, studentName.value, studentAge.value);
        if (departName.value.toUpperCase() === "MSD") {
            studArr.push(studentObj);
            resolve("succesful");
        }
        else {
            reject("unsuccesful");
        }

    });
    addStudent.then(alert)
        .catch(alert);
});





