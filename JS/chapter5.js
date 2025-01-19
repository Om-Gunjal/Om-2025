// Function in JS 

function add()
{
    console.log("10 + 20=",10+20);
}

add();

// para function
function add2(a,b)
{
    console.log(a+b)
}
let a=10;
let b=10;
add2(a,b);

//arrow function
let mul=(a,b)=>
{
    console.log(a*b);
}
mul(10,10);

// function for count vovels

let char;
function vow(string)
{
    let v=0;
    for(char of string)
    {
        let loStr = char.toLowerCase();

        if (loStr=="a"||loStr=="e"||loStr=="i"||loStr=="o"||loStr=="u")
        {
            
            v++;

        }
    }
    console.log(v);
}
let p=prompt("enter string");
vow(p);


//function can be passed as a argument or parameter to another function

