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