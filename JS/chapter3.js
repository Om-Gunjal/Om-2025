// Loops in JS
// for
let sum=0;
for(let i=1;i<=5;i++)
{
     sum=sum+i;
}
console.log(sum);

//while
let i=0;
while(i<5)
{
    console.log(i);
    i++;
}
console.log(i);

// do while
do
{
    console.log("hlo");

}while(i<5)
    {
        console.log(i);
        i++;
    }

    // for of
str="omg";
for(let i of str)
{
    console.log(i);
}


//for in 
const student=
{
    age:20,
    cgpa:9,
    pass:true
};

for(let i in student)
{
    console.log(i);

}


// print even numbers

// for(let i=0;i<=100;i++)
//     {
//          if(i%2==0)
//          {
//             console.log(i);
//          }
//     }
    
//guess the number 

// let num=3;
// let unum=0;

// unum=prompt("guess the num");
// while(unum!=num)
// {
//     unum=prompt("guess the num again")
   
// }


// string literals  ( string interpolation ) ``

console.log("student age is ",student.age,"and CGPA is ",student.cgpa)

let temp= `student age is ${student.age} student CGPA is ${student.cgpa}`
console.log(temp);