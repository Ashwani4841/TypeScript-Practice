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