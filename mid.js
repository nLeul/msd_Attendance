"use strict";
// let start = 0;
// function someFun(num) {
//     let jordan = 23;
//     if (num >= 0) {
//         num = Math.sqrt(num)
//     }
//     start = jordan  + num;
//     console.log(num + " " + jordan + " " +  start);
//     return num;
// }
//     console.log(start);
//     console.log(someFun(100));
//     console.log(jordan);
//question 2
// let myObj = {
//     myArray: [1, 2, 3],
//     anotherArray: [1, 2, 3],
//     equals: function() {
//         return this.myArray === this.anotherArray;     } }
// console.log(myObj.equals());
//qusetion 3
// const x = 10;
// const y = x;
// y = 100;
// console.log(x);
// //qusetion 4
// const x=alert("hi");
// //qusetion 5
// const y=console.log("bye");
//qusetion 6
// let myArray=[1,2,3,4];
// let anotherArray=[10,11,12,13]
// console.log(myArray[0]);
// myArray=anotherArray;
// console.log(myArray[0]);
// console.log(myArray.length);
//qusetion 7
// function hi(name){
//     return 'Hi ' + name;
// }
// let goodBye= function(){
//     return 'Good Bye';
// }
// console.log(hi('Developer','Welcome'));
// console.log(goodBye('Developer'));
// console.log(goodBye);
// console.log(goodBye());
//question 8
// let color='red';
// let myObject={
//     color : 'blue',
//     printColor:function(){
//         alert(color);
//     }
// }
// myObject.printColor(); //red
// //qusetion 9
// const x = {a: 10, b: 20, c:30}
// const y = x;
// y.c = 300;
// y.d = 400;
// console.log(x.c);//300
// console.log(x.d); //400
// console.log(y === x);//true
//qusetion 10
// function checkAge(age) {
//     if (age > 18) {
//         return true;
// } else {
//         console.log("Age is less than 18");
//     }
// }
// const z = checkAge(19);//true
// const w = checkAge(18);//undefined because alert will always have undefined when it is assigned to a variable

//What is the value of z?
//What is the value of w?
//qusetion11
// function getQuote() {
//     return
// “this is a really long quote and therefore I want it to be on it’s own line.” }
//     const m = getQuote();  //undefined
//What is the value of m? ________undefined____________
//qusetion 12
//     // Fill in the blanks below
//     function getSix() {
//     return 6;
// }
// const f1 = getSix();//6
// const f2 = getSix;//function
// const f3 = f1;//6
// const f4 = f2();//6
// const f5 = f1();//error
/*14.Write a function named sortThis that takes three input parameters and returns an array
that has them sorted in ascending order.
    e.g. calling sortThis(5, 2, 3) should return [2, 3, 5]*/
// function sortThis(a,b,c) {
//     let arr=[];
//     if (a < b && a < c) {
//         arr[0] = a;
//         if (b < c) {
//             arr[1] = b;
//             arr[2] = c;
//         } else {
//             arr[1] = c;
//             arr[2] = b;
//         }
//     } else if (b<a && b<c) {
//         arr[0] = b;
//         if (a < c) {
//             arr[1] = a;
//             arr[2] = c;
//         } else {
//             arr[1] = c;
//             arr[2] = a;
//         }
//     } else if(c<a && c<b){
//         arr[0] = c;
//
//         if (a < b) {
//             arr[1] = b;
//             arr[2] = c;
//         } else {
//
//             arr[1] = c;
//             arr[2] = b;
//         }
//     }
//         return arr;
// }
// console.log(sortThis(5,2,3));
/*
15. Write a function named somethingOdd that takes an array of numbers as input and returns the product of all the array values at the odd indices.
*/
// function somethingOdd(arr) {
//     let mul=1;
//     for(let i=1;i<arr.length;i+=2){
//         mul*=arr[i];
// }
//     return mul;
// }
// let product=somethingOdd([1,2,3,4]);
// console.log(product);
/*
16.a) Create a student object with the properties first name and last name.
    b) Create an array and add 2 student objects.
    c) Use the forEach method to print out all the values and indices.
    Use function declarations to declare any functions in the code. */
// let student1={
//     first_name:"umar",
//     Last_name:"inan",
// }
// let student2={
//     first_name:"Seble",
//     Last_name: "Aygoda",
// }
// let array=[student1,student2];
// array.forEach(function (value, index,) {
//     console.log(`${value.first_name}-${value.Last_name}-index`);//why
// });
/*
qusetion 17 Write a function ‘multiplyAll’ which takes an array as
a parameter and returns the product of all the values in this array.
    You have to use the reduce method.  Include an initial value.
     Use function declarations for all functions you write.
*/
// function multiplyAll(arr) {
//     let product=1;
//     for(let i=0;i<arr.length;i++){
//         product*=arr[i];
//     }
//     return product;
// }
// let prod=multiplyAll([1,2,3,4,5]);
// console.log(prod);
//or using reduce
// function multiplyall(array) {
//     return array.reduce((acc,val)=>acc*val,1);
// }
// let prod=multiplyall([1,2,3,4,5]);
// console.log(prod);

/*qusetion 16.Write a function ‘thisProgramIsTheBest’ which takes 3
parameters. First two parameters are objects that have
property ‘color’ and the last one is a function, “cbFun”.
If the color properties are equal, then
return “Same color!”, otherwise call the cbFun
function with the input parameters as arguments,
    and then return “Different colors”. */

// function thisProgramIsTheBest(obj1,obj2,cbFun) {
//     if(obj1.color=obj2.color){
//         return same color;
//     }
//     else{
//         cbFun(obj1,obj2)
//             return "differnt colors";
//
//     }
}
// the qusetion does not specify if it is taking object or not
/*/qusetion 19. *Write a function, helper, that map will
use to multiply each element by its corresponding the
array index.  For example, in the code below returnVal
should be [0, 20, 60, 120].  Also, fill in the blank
for what the second log will show as the value of the
array*/
// let array =[10,20,30,40]
// // let returnVal= array.map(helper);
// // console.log(returnVal);
// // //  [0, 20, 60, 120]
// // console.log(array);  //
// function helper(array) {
//     return arr.map((val,index)=>val*index);
// }
// let returnVal=helper(array);
// console.log(returnVal);
/*question 20.Complete the code for an object, rectangle.
    It should have properties for length and width.
    It should have methods to compute
and return the area and the circumference.*/
// const rectangle={
//     length:12,
//     wiwdth:10,
//     area(){
//         console.log(this.length*this.width);
//     },
//     circum(){
//         console.log(2*this.length*this.width);
//     }
// }

/*Write code for your own version of filter.
    a.Your function must be a pure function.
    b.You cannot use JavaScript’s filter method.
    c.The name will be myFilter.
    d.It will have two parameters.
    The first will be the array to filter.
    The second will be the filter function.
    e.Write a JS Doc comment that will pass our esLint rules. f.        Test your function on this array [1, 2, 3, 4, 5].  Write a function that will allow you to use myFilter to filter the array for even numbers.
*/
