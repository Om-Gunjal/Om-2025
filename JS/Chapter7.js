// object and classes

//creating object 

const student =
{
    name:"om",
    rollno : 5,
    
}


//Protoype
//In JavaScript, prototypes are a fundamental part of its object-oriented model.
//  Every JavaScript object has a prototype property that points to another object,
//  from which it can inherit properties and methods. 
// This allows for object inheritance and method sharing among multiple objects

// __protoype__
const employee = {
    caltax() {
      console.log("Tax calculated");
    }
  };
  
  const newEmployee = {
    salary: 50000
  };
  
  // Set newEmployee's prototype to be employee
  newEmployee.__proto__ = employee; // or use Object.setPrototypeOf(newEmployee, employee);
  
  newEmployee.caltax();  // "Tax calculated"

  
  // if in object and prototype have same method then object method is called   


//    Class
//    class is a program code template for creating objects  
  
class myclass
{
    constructor()
    {
        console.log("hi constructor");
    }
    sayhi ()
    {
        console.log("hi");
    }
}

 let myc=new myclass;
myc.sayhi();