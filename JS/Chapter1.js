// printing anything 

 console.log("hlo omg")

// pop up 
alert("hlo")

// Taking input 
let p = prompt("input")
console.log(p);

 // variable in JS 

 age=25;
 console.log(age);

 name="om";
 console.log(name);

 N=null;
 Y=undefined;

 age=age+1;
 console.log(age);

 boll=false;
 boll=true;
 console.log(boll);

 // var , let and const 

 var a=10;

 var a=9;

 console.log(a);
 //print last value 

 let b=1;

//  let b=2;
// let cant allow to re declare in same block of code

b=2;  // you can update it 
console.log(b);

const c=3;
//  c=4; you got error
console.log(c);

let d;
// print undefined
// const must be given some value at time of declaration


//Data types

console.log(typeof(a));


// create object 
const student=
{
    age:20,
    cgpa:9,
    pass:true
};

console.log(student.cgpa)
console.log(student["pass"])

// you can chnage the data of const object

student.age=student.age+1;
console.log(student.age)

student.pass=false;
console.log(student.pass)
