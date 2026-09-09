
//funName();

function funName() {
    console.log("I am inside  normal function")

}

// function expression
let funName2 = function () {
    console.log("I am insides  anonymous function ")
}
//funName2();

let funName3 = () => {
    console.log("I am insides arrow function");
}
//funName3();

function operation(a, b) {
    return { add: a + b, sub: a - b, mult: a * b };
}

let { add: addition, sub, mult = 1 } = operation(5, 3);
// console.log(addition);
// console.log(sub);
// console.log(mult);

function add(...lis) {
    let sum = 0;
    for (let x of lis) sum += x;
    return sum;
}
// let arr =[2,3,4,5,7,8,53,3,6,789,8,4,7,6,8]
// console.log(add(...arr));
// console.log(add(2));
// console.log(add(2,2,33,45,56,44,87,99,88,100));
// console.log(add(2,2,33,45,56,7,7));

function fun(lis) {
    return () => { "Hello sir" };
}
// arr = fun()
// console.log( typeof arr);
// console.log(arr);

function papa_ji(child) {
    console.log("yes");
    child();
    console.log("no");

 }
// let chillar =() => { console.log("i am child")}
// papa_ji(chillar)

let obj = {
    name : "push ji",
    greet : function(name){
        return `hello good morning ${this.name = name} Aunty`;
    }
}

// console.log(obj.greet("Kallu bhaiya"))
// console.log(obj.name);
