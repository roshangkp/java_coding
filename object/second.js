obj = {
    name: "Coding Seekho",
    age: 100,
    contact: 1234567890,
    address: {
        city: "Lucknow",
        pin: 231321
    }
}

// loop over  the object
//   for(let item of Object.entries(obj)){
//       console.log(item[0])
//       console.log(item[1])
//  }

//  for (let x of Object.keys(obj)){
//  console.log(obj[x]);
//  }

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// for(let x in obj){
//     console.log(x);
//    console.log(obj[x]);
// }

// Object.keys(obj);
// Object.values(obj); // these alls returns the arrays regarding this 
// Object.entries(obj);

// copy
// METHOD 1 *******************************************************************
// obj2={...obj}
// obj2.name="Coding  Seekho sab ka sathi"
// obj2.age=1000;
// obj2.address= {city:"Pune",pincode:123456}
//  METHOD 2 ********************************************************************
// obj2 =Object.assign({},obj);

//   obj2.name="Coding  Seekho sab ka sathi"
//   obj2.age=1000;
//   obj2.address.city="Pune";

//METHOD 3 ************************************************************************
// obj2={...Object.entries(obj)}
// obj2["3"][1].city="Pune";
// console.log(obj)
// console.log(obj2)

//DEEP COPY 
// METHOD 1 ************************************************************************

// obj2 = structuredClone(obj);
//  obj2.name="Coding  Seekho sab ka sathi"
//  obj2.age = 1000;
//  obj2.address.city = "Pune";


// METHOD 2****************************************************************
arr = [1, 2, 3, 4, 4]
// console.log(JSON.stringify(arr));
// obj2=new Object(JSON.stringify(obj))
obj2 = JSON.parse(JSON.stringify(obj))
obj2.age = 1000;
// obj2.address.city = "Pune";
// console.log(obj);
// console.log(obj2);
// console.log(typeof obj2);

[x ,y ,...z ]=[...obj]
console.log(x)
console.log(y)
console.log(z)

//METHOD 3. Function ke sath hota ...................

