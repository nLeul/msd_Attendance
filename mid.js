//question 1
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
function sortThis(a,b,c) {
    let arr=[];
    if (a < b && a < c) {
        arr[0] = a;
        if (b < c) {
            arr[1] = b;
            arr[2] = c;
        } else {
            arr[1] = c;
            arr[2] = b;
        }
    } else if (b<a && b<c) {
        arr[0] = b;
        if (a < c) {
            arr[1] = a;
            arr[2] = c;
        } else {
            arr[1] = c;
            arr[2] = a;
        }
    }

      else if(c<a&&c<b){
            arr[0]=c;
        }
        if(a<b){
            arr[1]=b;
            arr[2]=c;
        }
        else{
            arr[1]=c;
            arr[2]=b;
        }
        return arr;
}
console.log(sortThis(5,2,3));
