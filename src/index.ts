// console.log("hello world")

/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */



// Our first TS Code
let age = 29
console.log(age)
// static types - once you declare a variable, its datatype can be inferred and is constant for this variable
// good practice decalares the datatype as the variable is being assigned
let age2: number = 54;
let myName: string = "David";
let isPrime: boolean = true;



// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value

// null, undefined, boolean, number, string, object, and symbol 

// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing



// ----- Arrays: Dynamic, you can pass any data type
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['art', 'voids', 'fun'];
// accept different datatypes but ORDER and LENGTH matter
let multiArr: [number, string, boolean, null] = [12, "danny", true, null];

// now order doesn't matter
let dynamicArr: (number | string)[] = ["destiny", 23];


// Another huge benefit: Code completion
// Intellisense > typescript can make good suggestions on methods you may want to use with your variables
// because you've explicitly declared the datatypes of your variables

// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values

// Code Completion



// ----- Enums: Special "Class" that represents a group of constants.

const small = 1;
const medium = 2;
const large = 3;

// PascalCase "numeric"

enum Size {Small=1, Medium=2, Large=3};
console.log(Size.Medium);
console.log(medium);

// "string"
enum Teach {Lead = 'Brandt', Associate = 'Brendan'}
console.log(Teach.Associate)


// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config

function calcTax(income:number, taxYear?:number):number {
    console.log(taxYear)
    if (income < 50_000) {
        return income*0.25
    } else {
        return income*0.45
    }
}


// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/

let emp = {id: 1};
console.log(emp)
console.log(typeof emp) // object type i.e. dictionary

let employee:{
    readonly id:number, // readonly properties cannot be redefined or changed
    eName:string
    age?:number,
    location?:string // key? notation says the value for this key may not be defined
} = {
    id:1,
    eName:'Brandt'
};
console.log(employee)
employee.location = "MD";
employee["age"] = 18;
employee.age += 50;



