let btn = document.querySelector('#btn');
let dada = document.querySelector('#dada');

let counter = 0;

// btn.onclick = ()=>{
//     console.log(`counter1 = ${counter++}`); // string literal || format string
// }


// btn.addEventListener('click', (event_object)=>{
//     console.log(`counter2 = ${counter++}`); // string literal || format string
//     console.log(event_object);
// });


btn.addEventListener('click', hello);

function hello(event_object) {
    console.log(`counter2 = ${counter++}`); // string literal || format string
    console.log(event_object);
}