

    //qusetion 1:creating a constructor function
//        function Person(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
// }

// let seble=new Person('seble','Aygoda');
// alert(seble.fname);
// alert(seble.lname); 

//     //qusetion 2: create a calculator
 function Calculator(){
        this.number1=0;
        this.number2=0;
        this.operation="add","multi";
      this.read=function(){            
        this.number1 =parseInt(prompt('enter the numbers first number'));
        this.number2 =parseInt(prompt('enter the numbers second number'));
        this.operation=prompt('enter the operator add or multi');
       },
       this.sum=function(){
          return this.number1+this.number2;
       }
       this.mult=function(){
           return this.number1*this.number2;
       }
 }

 let calc=new Calculator();// creating a new object from the constructor function
  calc.read();
  if(calc.operation === '+') {
        alert (calc.sum());
  }
  else{
      alert(calc.mult());
  }
  //question 3: create accumulator function
  //input: we have random numbers from the user using prompt 
  //process:we use sum function to add all the numbers
  //output: the total values of all the accumulated values
  function Accumulator(){
      this.sum=0;
      this.inputs=function(){
          this.sum+=parseInt(prompt("please enter the numbers until done",0));
      }

  }
let acc= new Accumulator();
acc.inputs();
alert(acc.sum);

 