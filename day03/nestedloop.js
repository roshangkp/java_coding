//nested loops.

// console.log(j);

// for(let i = 2; i<=10;i++){

//     //for loop
//    // for(let j =1; j<=10;j++){
//       //  console.log(i * j);
//     //}
//     // while loop
//     // let j =1;
//     // while(j <=10){
//     //     console.log( i * j);
//     //     j++;
//     // }


//     // do while loop
//     let j =1;
//     do{
//         console.log(i*j);
//         j++;
//     } while(j<=10);
//     console.log();
// }
//     console.log(j);


//control statements

// for(let i =1;i<=10;i++){
//     if(i ==6) continue;
//     console.log(i);
// // }
// let count =0
// let flag=1
// for (let j = 1; j < 5; j++) {
//     for (let i = 1; i <= 10; i++) {
//         if (i == 6){
//          flag=0;
//          break;
//         } 
//         //console.log(i);
//         count++;
//     }

//     if(flag ==0) break;
// }

// console.log(count);


//lable statements

//statement ::
// expresion ::  where you have to do calculation

// let count =0
// ujjawal :for (let j = 1; j < 5; j++) {
//     for (let i = 1; i <= 10; i++) {
//         if (i == 6){
//          break ujjawal;
//         } 
//         //console.log(i);
//         count++;
//     }
// }

// console.log(count);

let count =0
ujjawal :for (let j = 1; j < 5; j++) {
    for (let i = 1; i <= 10; i++) {
        if (i == 6){
         continue ujjawal;
        } 
        //console.log(i);
        count++;
    }
}
console.log(count);
