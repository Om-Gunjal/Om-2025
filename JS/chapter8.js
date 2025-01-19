// sync in JS

/* sycnchronous programming
its simply means the code is running in line by line way 
*/

console.log("1");
console.log("2");
console.log("3");

/*
asynchronous programming 
In an asynchronous program, instead of waiting for a task to finish before moving
on to the next one, the program can continue executing other tasks and come back
to the original task once it’s done. This improves the performance and 
responsiveness of applications, especially in environments where I/O operations
are common. */

console.log("1");
console.log("2");
setTimeout(()=>
{
    console.log("timeout");
})
console.log("3");


// call back 

function sayHello(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  sayHello("Alice", sayGoodbye);
  

/*callback hell
 It occurs when you have nested callbacks inside one another, making the code hard
to read and maintain. */

function firstTask(callback) {
    console.log("First task done.");
    callback();
  }
  
  function secondTask(callback) {
    console.log("Second task done.");
    callback();
  }
  
  function thirdTask(callback) {
    console.log("Third task done.");
    callback();
  }
  
  firstTask(function() {
    secondTask(function() {
      thirdTask(function() {
        console.log("All tasks are done!");
      });
    });
  });

  
/* A Promise in JavaScript is like a promise made by a friend:

Pending: You make a promise, but you're still working on it.
Resolved: You successfully completed the task, and the promise is fulfilled.
Rejected: Something went wrong, and the promise is broken.
In technical terms, a Promise is an object that represents the eventual completion
(or failure) of an asynchronous operation.

Simplest Definition:
A Promise is an object that represents a value that may be available now, or in the
 future, or never. */


 let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Task done!");
    } else {
      reject("Task failed.");
    }
  });
  
  myPromise
    .then(result => console.log(result))  // "Task done!" if successful
    .catch(error => console.log(error));  // "Task failed." if failed
  


/* Asyn 
it always returns a promise 

async function functionname (){....}    

await
await pauses the execution of surrrounding async function untill promise is 
setteled 
await only declaire inside a async function

async function functionname ()
{
  await functionname();
}    

*/


// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is defined and executed immediately after it is created. It is often used to create a new scope to avoid polluting the global namespace.

// Syntax of IIFE:
// javascript
// Copy
// (function() {
//   // Code inside the IIFE
// })();

(function() {
    console.log("This is an IIFE!");
  })();
  