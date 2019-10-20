<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
    //What will the following alert?
//question 1
// function pow(x, n) {
//    if (n == 1) {
//         return x;
//       } else {
//            return x * pow(x, n - 1);
//     }
// }
// //alert( pow(2, 0) );
// /*question 2:for large datasset linked list is more efficent
// than array.
// My question:why is IDE that represents each line in a program the answer
// and why s it that
// */
// //question 3: write it to be a single list
// node1 = {value:50, next: null};
// head = {value: 10, next: node1};

// // head={value:10,next:{value:50,next:null}}
//  //console.log(head.next.next);
// // /*question 4:declare  new node2 with value 15. Modify node1
// //  to add node2 to the end of the list*/
// node1 = {value:50, next: null};
// head = {value: 10, next: node1};
// //declaring new node 2 to the end of the list
// head={value:10,next:node1};
// node1={value:50,next:node2}
// node2={value:15,next:null}
// /*qusetion number 5
// node1 = {value 50:, next: null};
// head = {value: 10, next: node1};
// Add a node with value 5 to the beginning of the list
// */
// let node1 = {value:50, next: null};
// let head = {value: 10, next: node1};
// head={value:5, next:head}
// //console.log(head.next);//head with a value 10
// //delete head
// head.next=head.next.next;//am assigning my head.next to be head.next.next
// //console.log(head.next);
// /*question number 6
// node1 = {value 50:, next:  null};
// head = {value: 10, next:  node1};
// Insert a node with value 8 in the middle of the list*/
// node1 = {value:50, next:  null};
// head = {value: 10, next:  node1};;
// head.next={value:8,next:node1};
// // console.log(head);//value10,next:node1
// // console.log(head.next);//value 8:next node1
// // console.log(head.next.next);//value 50:next:null
//question 7

//  let name = "John";
// function sayHi() {
//  alert("Hi, " + name); 
//  }
// name = "Pete";
 //alert(sayHi); //it will show the whole function
// alert(sayHi());//the function,hi pete and then undefined
//console.log(sayHi);//the function
// console.log(sayhi());//reference error
// sayHi;//say hi is not defined
//sayHi();//it will alert hi pete
//let x=alert(sayHi);//function
// let x=alert(sayHi());
// let x=console.log(sayHi);
// let x=console.log(sayHi());
//qusetion what will happen if we use strict
//question 8
function makeWorker(){
 let name = "Pete";
    return function() { alert(name);
     };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work();
    </script>

<body>
    
</body>
</html>
