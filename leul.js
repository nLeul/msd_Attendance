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
console.log(departName);
let studentAge = document.getElementById("age");
function hash(str) {
    let prime = 37;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum * prime;
}
console.log(hash("leul"));
console.log(hash("abel"));

class Person {
    constructor(fullname, age) {
        this._fullName = fullname;
        this._age = age;
        this._id = hash(fullname);
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
    getId() {
        return this._id;
    }

}
class Student extends Person {
    constructor(department, fullname, age) {
        super(fullname, age);
        this._department = department;
        this._attenCount = 0;
        this._faculty = facultyArr;
    }
    setDepartment(department) {
        this._department = department;
    }
    getFaculty() {
        return this._faculty;
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
            setTimeout(_ => resolve(`your registration is succesful and your Id is ${studentObj.getId()}`), 1000);
            setTimeout((_ => alert(`your registration with ${facultyArr[0].fullname} is succesful and I am your ${facultyArr[0].department}`)), 2000);
            setTimeout((_ => alert(`your registration with ${facultyArr[1].fullname} is succesful and I am your ${facultyArr[1].department}`)), 2000);
        }
        else {
            reject("unsuccesful");
        }

    });
    addStudent.then(alert)
        .catch(alert);
});





