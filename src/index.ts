function greet(person:string):string{
    return `${person}, Welcome back dude`
}

console.log(greet("Ashwani"))

const languege : string[] = [
  "Javascript",
  "Typescript",
  "Python"
]

type Student = {
  name:string;
  age:number;
  isPassed:boolean
}

const student1:Student ={
  name: "Raghav",
  age:1,
  isPassed:true
}

// console.log(student1)

let userInfo:[string, number]
userInfo=["Ashwani",24]
// console.log(userInfo)

const productCart: string[] =[
  "laptop",
  "keyboard",
  "headphone",
  "mobile"
] 
// console.log(productCart)

type Product1 ={
  name:string;
  price:number;
  inStock:boolean;
}

const products:Product1 ={
  name:"Books",
  price:299,
  inStock:true
}
// console.log(products)

type Product = {
  name:string;
  price:number;
  inStock:boolean
}
const allProduct:Product[]=[
  {
    name:"books",
    price:299,
    inStock:true
  },
  {
    name:"Phones",
    price:5999,
    inStock:true
  },
  {
    name:"Laptops",
    price:45000,
    inStock:false
  }
]
// console.log(allProduct)

ype User ={
  name:string;
  age:number;
  location:[number,number]
}
const user1:User={
  name:"Ashwani",
  age:24,
  location:[23.45, 43.45]
}
// console.log(user1)

type newProduct={
  name:string;
  price:number;
  categories:string[];
  discount:number | string;
}
const finalProduct:newProduct={
  name:"Electronics",
  price:23000,
  categories:["phones", "keyword"],
  discount:"10%"
}
// console.log(finalProduct)

type User5={
  name:string;
  age:number;
  skills:string[];
  role: "user" | "admin"
  coordinates:[number, number];
}

const newUser2:User5[]=[
  {
  name:"Ashwani",
  age:24,
  skills:["js","react","node"],
  role:"admin",
  coordinates:[23.34, 45.67],
},
{
  name:"Radhav",
  age:2,
  skills:["data","playing"],
  role:"user",
  coordinates:[23.45, 54.45]
},
{
  name:"Kundan",
  age:22,
  skills:["junle","travelling"],
  role:"user",
  coordinates:[32.34, 32.42],
},
]
// console.log(newUser2)

function printLength(value: number | string){
  if(typeof value === "number"){
    console.log(value*2)
  }else{
    console.log(value.length)
  }
}

// printLength(10)

function checkValue(value: string | number | boolean){
  if(typeof value === "string"){
    console.log("This is string")
  }else if(typeof value === "number"){
    console.log("This is number")
  } else{
    console.log("This is boolean value")
}
}
// checkValue("Ashwani")
// checkValue(30)
// checkValue(true)

function loginUser(userId: string | number){
  if(typeof userId === "string"){
    console.log(`logging in with email: ${userId}`)
  }else{
    console.log(`logging with userId: ${userId}`)
  }
}
loginUser("ashwani@gmail.com")
loginUser(234)