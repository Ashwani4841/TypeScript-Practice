"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
let name = "Ashwani";
let city = "Varanasi";
let collageName = "MCMT";
// Number
let age = 25;
let salary = 30000;
let price = 599.99;
// boolean
let isLoggedIn = true;
let isAdmin = false;
// Null
let selectedUser = null;
// Undefined
let username;
console.log(username);
// Any===any basically tells TypeScript:Don't check this value.
let data = "Ashwani";
data = 100;
data = true;
data = [];
data = {};
// Unknown====unknown is safer than any.It means:"I don't know what type this value is yet."
let data2 = "Ashwani";
if (typeof data2 === "string") {
    console.log(`Welcome ${data2}`);
}
//# sourceMappingURL=type.js.map