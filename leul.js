/* eslint-disable indent */
let faculty = {
    fullname: null,
    age: 0
};
Object.freeze(faculty);
let facultyArr = [];

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
let value = document.getElementById("name");
function hash(value) {
    let prime = 37;
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum += value.charCodeAt(i);
    }
    return sum * prime;
}
console.log(hash("abel"));
console.log(hash("abel"));



class Person {
    constructor(fullname, age, id) {
        this._fullName = fullname;
        this._age = age;
        this._id = id;
    }
}

class Student extends Person {
    constructor(department, attenCount) {
        super();
        this._department = department;
        this._attenCount = attenCount;
    }
}
