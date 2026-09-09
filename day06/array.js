// creation  method 1 **************************************************************************************************
let array =[1,2,3,4,5,6,7,8]; //array literals

//console.log(array[1]);
//console.log(typeof array)


//method 2

let brr  = new Array(5);


//console.log(brr.length)
brr.length = 7;
//console.log(brr.length)
//console.log(typeof brr)
//console.log(brr[6]);
let crr = new Array(1,2,3,4,5,6,);
//console.log(crr.length)

//method 3
let drr = Array.from(crr)
//console.log(drr.length)


//accessing  phase 2****************************************************************************************************************


//console.log(Boolean([])); //truthy --> true
//console.log([] == []); //false because in js comperison is done or 


let err =drr;
//console.log(err ==drr);

//reference :: -->
//stack Refrence
//heap :: actual allocation

//method 1:: index accesing

// console.log(err[0])
// console.log(err[1])
// console.log(err[2])
// console.log(err[3])
// console.log(err[-1]) //undefine --> -1 index is not exist

// console.log(err.at(-1)) //backward indexing ......................... 


//method with loops
// console.log(err); //give  return array object
// for (let i=0;i < err.length;i++){
//     console.log(err[i]); //each element which is present the index

// }
// console.log()
// for (let element of err){
//     console.log(element);
// }


//mutability :: insert,update ,delete,*****************************************************

// console.log(err);

// // insertion / deletion :: push and pop :: both will perform the action to the element to the end of array
// err.push("Hello");
// console.log(err);
// err.push("good morning");
// console.log(err);
// err.pop()

// console.log(err);
// console.log(err.pop()); //pop method will delete last element and return it
//console.log(err);

// insertion / deletion :: from the start of  the  array

//shift() : delete from the start and return 
// unshift() : add at the start

// err.shift();
// console.log(err.shift()); 

// err.unshift(1);
// console.log (err);

//let frr =[];
 let frr = new Array();
frr.unshift(1,2,3,4,5,6);
console.log(frr);
//empty vs undefine

frr.length=10;
console.log (frr);
console.log(frr[6]);




