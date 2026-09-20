// obj = {
//     "name": "Coding seekho",
//     greet: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // obj.greet; # this will direct to obj object 
// // let x=obj.greet;
// // x() // from here undefine value of name is printed

// // constructor function

// function coding(x, y) {
//     this.name = x;
//     this.age = y;
// }

// let obj1 = new coding("pune", 2);
// console.log(obj1.name);
// console.log(obj1.age);


// let obj2 = new coding("lko", 5);
// console.log(obj2.name);
// console.log(obj2.age);


// //factory function :: 

// function fun(name,age) {
//     return {
//         name,
//         age,
//         greet: function () {
//             console.log(`Hello ${this.name}`);
//         }
//     }
// }
// let obj3=new fun("pune",4);
// console.log(obj3.name);
// console.log(obj3.age);
// obj3.greet();

// let obj4=new fun("lko",100);
// console.log(obj4.name);
// console.log(obj4.age);
// obj4.greet();

// console.log(obj4.toString(),"******");

// obj4.Hello()


// OOPs :: way of programming in which  every keepos around the object 

class student {

    //ths is beautiful function is it called when object  is created 
    //it  used to utilized the variable  of the objects
    
    constructor(name, age) {
        //property
        this.name = name;
        this.age = age;
    
    }
    //method`
    greet(){
        console.log(`hello ${this.name}`);
        console.log(`hello ${this.age}`);
    }
}

st1=new student("pune",100);
st2=new student("lko",1000);
// console.log(st1.name === st2.name);
// console.log("pune" === "pune");

// console.log();

// Inheritance ::