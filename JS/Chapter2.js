
// single line commnet

/* double line 
comment */


// Arithmatic opertor

let a=10;
let b=20;

console.log("a+b=",a+b);

console.log("a-b=",a-b);

console.log("a*b=",a*b);

console.log("a/b=",a/b);

console.log("a%b=",a%b);

console.log("a^b=",a**b);

a++;
console.log(a);

++a;
console.log(a);

a--;
console.log(a);

--a;
console.log(a);


a+=3;
a-=4;
a*=4;
a%=4;
a**=4;


console.log(a==b);
console.log(a!=b);
console.log(a===b);  // triple equal to strict check equality( datatype )
console.log(a!==b);
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);


// && , || , !


//Conditional statement 

if(a<b)
{
    console.log("yes")
}else if(a>b)
{
    console.log("no")
}else
{
    console.log("no option")
}


// Ternary operator

// condition ? "if yes " : "if no";

a>b?"yes":"no";


// Switch

switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }


// Practice Question



num=prompt("enter number");
if(num%5===0)
{
    console.log("yes multiple")
}else
{
    console.log("no multiple")
}