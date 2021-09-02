 function add(num1:number, num2:number) {
     console.log(num1+num2);
 }

 add(); //error
 add(1,2);
 add(1,2,3); //error
 add("hello","world"); //error


 interface User {
     name:string;
     age:number;
     gender? :string;
     [grade:number] :string;
 }
  
 let user: User = {
     name:'xx',
     age : 30
     
 }

 user.age =10;
 user.gender = "male"
 