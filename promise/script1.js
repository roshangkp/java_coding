const pr =new Promise((res,rej)=>{
    setTimeout(()=>{
     res ("yes ji khajana mil gya ");
 },2000);

// rej("bhag bhai police aa gyi h ");

})

console.log(pr);
// pr.then((message )=>{
//     console.log(message);

// }).catch((message)=>{
//     console.log(message);
// })

const pr1=new Promise((res,rej)=>{
    setTimeout(()=>{
         res ("yes ji khajana mil gya ");
        console.log(" I am insides pr1")},
        2000);
});
console.log(pr1);


const pr2 =new Promise(()=>{
    setTimeout(()=>{
        console.log("I am insides pr2");
    },1000);
});
console.log(pr2);


// what is promise


//object
// it will return a settle --> resolve ,promiseRejectionEvent
// promise   asynchronous operation --> microtask queue
//it will use to avoid the problem of callback hell