// arrays in JS

let arr=[12,34,56]

let str=["om","omg"]

console.log(arr);

console.log(str);

console.log(arr.length)

//for
// for( let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

//for in 
// for(let i in arr)
//     {
//         console.log(arr[i])
//     }
    
//for of 
// for(let i of arr)
//     {
//         console.log(arr[i])
//     }
    
// Q
// average marks 
// let marks=[85,97,44,37,65]
// let sum=0;
// for(let i of marks)
// {
//     console.log(i);
//     sum=sum+i;

// }
// let avg=sum/marks.length;
// console.log("average is =",avg)

// 10% off

let price = [223, 432, 313, 312, 243];
let i = 0;

for (let ind of price) {
    price[i] = ind * 0.90; // Directly calculate the discounted price
    i++;
}

console.log(price); // Output the updated price array
