// String
let name : string = "Ashwani";
let city : string = "Varanasi";
let collageName: string = "MCMT";

// Number
let age: number = 25;
let salary: number = 30000;
let price: number = 599.99;

// boolean
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

// Null
let selectedUser: null = null;

// Undefined
let username: string | undefined;

console.log(username);

// Any===any basically tells TypeScript:Don't check this value.

let data: any = "Ashwani";

data = 100;
data = true;
data = [];
data = {};

// Unknown====unknown is safer than any.It means:"I don't know what type this value is yet."


let data2: unknown = "Ashwani";
if(typeof data2 === "string"){
    console.log(`Welcome ${data2}`)
}
