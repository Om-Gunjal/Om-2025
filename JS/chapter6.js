console.log("hiiii");

// Window object 
// window object represent an open window in browser 
// its a browser object not js .it auto created by browser
// global object with lots o properties and methods 

window.console.log("hlo1");


// DOM ( documnet  object model )

// when the web is loaded , the browser create the dom of the page
 
// console.dir use for showing the properties and method of object 

// we can change dynamically after executhion in js 

// if we write script tag in head (before body) the we cant use dom 


// DOM MANIPULATION 
// selecting with id 
let head=document.getElementById("heading");
console.dir(head);

// selecting with class
let heads=document.getElementsByClassName("bt");
console.dir(heads);

// selecting with tags 
let P=document.getElementsByTagName("p");
console.dir(P);

// querry selector 
// it auto select without telling type of querry 

let elem=document.querySelector("p");
console.dir(elem);

let elem2=document.querySelectorAll("p");
console.dir(elem2);


/* properties
taganme = return tag name 
inner text
innerhtml
textcontent 
*/


// Attributes
// getattributes

let d=document.querySelector("div");
console.log(d);

let i= d.getAttribute("id");
console.log(i);

//Setattributes

let di=document.querySelector("div");
console.log(di.setAttribute("id","dove"));

// style
let a=document.querySelector("button");
a.style.backgroundColor="red";

// insert elements
 // first create emelent by 

let l = document.createElement("div");

//  node.append(l);
//  node.prepend(l);
//  node.after(l);
//  node.efore(l);

//node.remove(l);