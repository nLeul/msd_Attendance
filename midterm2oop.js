//4. Write a JavaScript function "checkExam" that returns
// the grade number. The function receives two arguments,
// two arrays:
//- The first input array contains the correct answers
// to an exam - The second input array is "answers" array
// and contains student's answers. -Return the grade
// number for the array of answers, giving +4 for each
// correct         answer,-1 for each incorrect answer
// -If the score < 0, return 0.
// Example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])→6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])→7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])→16
// checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) →0
// let arr1=correct_answer;
// let arr2=student_answer;
function checkExam(arr1,arr2) {
    let result=0;
    for(let i=0;i<arr1.length;i++) {
        if (arr1[i] === arr2[i]) {
            result += 4;
        } else{
            result -= 1;
        }
    }
        if(result<0){
            return 0;
        }
        return result;

}
let arr1 =[1,2,3,4];
let arr2=[0,2,3,5];
let output=checkExam(arr1,arr2);
console.log(output);
/*question 6 a.  Write a function, positive, that filter will use
to return an array containing only positive numbers.push()
For example, in the code below returnVal should
be [10, 20, 30].Also, fill in the blank for what the
second log will show as the value of the array:*/

//let returnVal= array.filter(positive);
//console.log(returnVal);  //
//  [10, 20, 30] console.log(array);  // ____

// function filterPostive(array) {
//     let postive_array = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             postive_array.push(array[i]);
//         }
//     }
//     return postive_array;
// }
//     let arr=[-10, 10, 20, -20, -10, 30]
//    let output= filterPostive(arr);
//     console.log(output);
    //other way of doing it with filter
// let arr=[-10, 10, 20, -20, -10, 30];
// //filter postive
// // let result=arr.filter(val=>val>0);
// // console.log(result);
// //filter negative
// let result=arr.filter(val=>val<0);
// console.log(result);

//qusetion 7function haveFun(){
//     let fun ={  myFuns : []
//     }
//     let i =0;
//     while(i<3){
//         let  myFunc = function(){
//             console.log(‘Fun : ’ + i);
//         }
//         fun.myFuns.push(myFunc);
//         i++;
//     }
//     return fun;
// }
// let anotherFun = haveFun;
// let result = anotherFun();
// let output1 = result.myFuns[1];
// let output2 = result.myFuns[0]();
//
// console.log(anotherFun);
// console.log(result);
// console.log(output1 );
// console.log(output2);
// //8.no overloading
// function fn(a,b){
//     console.log(a+b);
// }
// fn("hi","hi");
// function fn(a){
//     console.log(a);
// }
// //fn("CS");
// function fn(a,b){
//     console.log(a);
// }
//question 9. Write an iterative function,
// sumOfSquares(n) that will compute the sum of squares
// of all integers from 1 to n.
// E.g., sumOfSquares(3) will compute 1 + 4 + 9
// and return 14.
// function sumOfsquares(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i*i;
//     }
//     return sum;
// }
// console.log(sumOfsquares(3));

//recursion form of the same function
// function sumOfsquares(n) {
// if(n===1){
//     return 1;
// }
// return n*n+sumOfsquares(n-1);
// }
// console.log(sumOfsquares(3));
// let list={
//     courseName :"CS306",
//     credit : 4,
//         next : {courseName :"CS304",
//             credit : 1,
//             next : {courseName :"CS305",
//                 credit : 2,
//                 next : {courseName :"CS303",
//                     credit : 4,
//                     next : null
//             }
//         }
//     }
// }
//
function printByCredit(list,credit){
    if(list===null){
        return " ";
    }
    let names="";
    if(list.credit>credit){
        names+=list.courseName+",";
    }
     printByCredit(list.next,credit);
    return names;
}
console.log(printByCredit(list,2));


//qusetion 12

// let list={
//     value:11,
//     next:{
//         value:13,
//         next:{
//             value:90,
//             next:null
//         }
//     }
//
// }
// function listModify(node,fun){
//
//    if(node.next===null){
//        console.log("beforemodify"+node.value);
//        node=fun(node);
//        console.log("aftermodify"+node.value);
//        return;
//    }
//    console.log("beforemodify"+node.value);
//    node=fun(node);
//    console.log("aftermodify"+node.value);
//    listModify(node.next,fun);
// }
// function modify(node) {
//     node.value=node.value*2;
//     return node;
// }
// // listModify(list,modify);
// //question 13
function changeValues(node,conditionfun,modifierfun) {
    if(node===null){
        return;
    }
    console.log(node.value);
    if(conditionfun(node)){
       node=modifierfun(node);
    }
   // console.log(node.value);
    changeValues(node.next,conditionfun,modifierfun);
}
//now we are writting the condtion
function getEven(node) {

    if(node.value%2===0){
        return true;
    }
    return false;
}
changeValues(list,getEven,modify);

//question 15
function makeContacts() {
    let contact=[];
    function mycontact (name) {
        for(let cont of contact){
            if(name===cont.name){
                return cont.phone;
            }
        }
        let phone=prompt("enter the phone number");
        contact.push({
            name:name,
            phone:phone
        });
    }
  return mycontact;
}
let seblephone=makeContacts();
seblephone("abel");
