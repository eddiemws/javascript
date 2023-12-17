function myFunction () {
    document.getElementById("first").style.backgroundColor= 'white';
    document.getElementById("second").style.color = 'black';
    document.getElementById("third").style.color = 'black';
    // document.getElementById("demo").innerHTML= 'This is a Javascript document'
}




function Write () {
    document.write (4*1000000);
}

function Alert () {
    window.alert ("Eddy you will make it in life and achieve your dreams. Don't worry ");
    document.getElementById("alert").style.color = ' blue';
    document.getElementById("alert").style.backgroundColor = ' red';

}

function Console () {
    console.log (2 + 1);
}

 function Console1 () {
    console.log(3*5000);
 }  

let a, b, c;
 a=5;
 b=10;
 c= ( a * b );
//  document.getElementById("third").innerHTML = c;

 function Addition () {
    var num1, num2, num3;
    num1 = 60;
    num2 = 40;
    num3 = num1 + num2;
    document.getElementById ("third").innerHTML = num3;
 }

 function Subtraction () {
    number1 = 70;
    number2 = 40;
    result = number1 - number2;
    var number1, number2;
    document.getElementById("fifth").innerHTML = result;
 }

 function MyName() {
    let first_Name, last_Name, full_name;
    first_Name = 'EDWIN';
    last_Name = 'MWANGI';
    full_name = (first_Name +" "+ last_Name);
    document.getElementById("forth").innerHTML = full_name;
 } 


//function//
 function Operators () {
    let text1 = 20;
    let text2 = 5;
    text2 +=1000;
    results = text1 + text2;
    document.getElementById("sixth").innerHTML = results;
 }


 // funtion type two. //
 let G = MyFunction3(4,3);
 document.getElementById("nineth").innerHTML = G;

 function MyFunction3 (z , y) {
     return z * y;
 }


 //array//
const cars = ["bmw", "Toyota", "Ford"];
 document.getElementById("seventh").innerHTML = cars;


 //object//

const Names = {
 firstName:"Edwin",
 lastName:"Mwangi",
//  method/function = (a function as a type in an object.) //
 fullName: function fulname () { return this.firstName + " " + this.lastName;
} 

};

// outputing the object and method //
//the first edwin mwangi is direct acess of object, while second is access to its method.//
document.getElementById("eigth").innerHTML =
 Names.firstName + " " + Names.lastName + " " + "<br>" + Names.fullName();





 
