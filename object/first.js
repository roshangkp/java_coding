// create ->>
// 1. literals

obj = {

    name: "Coding Seekho",
    age: 24,
    address: {

        city: "lko",
        pincode: "273213"

    }

}
 obj.age=34

//  console.log(obj.age);
//  console.log(obj["age"]);


//console.log(obj)
// console.log(typeof obj.name);
// console.log(obj.age);

//2. object constructor

obj2 = new Object();
obj2.name ="ram"
    // console.log(typeof obj2)
    // console.log(obj2.name)

 // 3.functions
 
 function Student(name,a){
    this.name=name;
    this.age=a;

    // console.log(this.name)
    // console.log(this.age)

 }
st=new Student("ram",200);
 st2=new Student("rani",300)
// console.log(typeof st);
// console.log(st);
// console.log(typeof st2);
// console.log(st2);

 const obj3 ={
     name: "pushpa ji",
     age:100,
     address :{
        city:"lucknow",
        pincode:"100"
     }

 }
 //console.log(obj3);
//  delete obj3.name;
//  console.log(obj3)

// let[z,x,...c]=[1,2,23,43,4,5,1];

// console.log(z)
// console.log(x)
// console.log(c)

let {age:newAge,name="roshan" ,  x = 18}=obj3;
// console.log(name);
// console.log(newAge);
//  //console.log(newName);
//  console.log(x);

//console.log({}=={})

// access ->> dot vs [] || mutable or immutable
