//quiz one oop
function foo() { 
    return "baz"; } 
    console.log(foo()); // return baz
    console.log(foo); 
    bat = foo; 
    console.log(bat()); 
    console.log(bat);//
     console.log(alert(bat));//undefined
     //class work 1 day 1
       function sayHi(){
         alert("Hi");}
        console.log(sayHi);//
         console.log(sayHi());// alert on the web and undefined why
         func1 = sayHi;// nothing
        func2 = sayHi();// his
        console.log(func1);
         console.log(func1());
        console.log(func2);
         myArray = [func1,  func1()];
         console.log(myArray[0]);
         console.log(myArray[0]());//3 hi displayed
          console.log(myArray[1]);
        console.log(myArray[1]());
         console.log(func2()); 

   