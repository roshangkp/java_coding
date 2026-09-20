console.log("Hello 1"); //call stack 1

setTimeout(() => {
    console.log("\nI am insides set time out\n");

},0); //last 


function fun(name) {
    console.log("\nI am insides fun function\n");
    return `Hello ${name} sir ,test paper ka thoda hint de dijiye\n`

}

for (var i = 0; i < 4; i++) {
    console.log("I am insides set time out>>>>>>",i);
    setTimeout(() => {
        console.log("\nI am insides loop time out<<<<<<<<<<",i);
     }, 2000); //last

}

function call(name) {
     console.log("\nI am insides call function");


    setTimeout(() => {
        console.log("\nI am insides set time out of the call function");
    }, 1000); //last 

    let message = fun(name);
    console.log(message);
    }


 call("Ujjwal");  //call stack 2

console.log("\nAree sir kuch to bata dijiye"); // call stack 3