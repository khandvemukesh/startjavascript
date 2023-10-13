// Primitive

// 7 types : String, Number , Boolean, Null, Undefined, Symbol,BigInt

const score= 100
const scoreValue= 100.3

const isLoggedIn=false
const outTemp = null
let userEmail;

const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId)

const bigNumber = 3333332522261244n;


//Reference (Non-Primitive)

//Array , objects, Functions

const heros=['mukesh','khandve', 'umesh', 'khandve']

let myObj= {
    name:'mukesh',
    age:22,
}

const myFunction = function(){
 console.log('hello mukesh khandve')
}
myFunction()

console.log(typeof bigNumber);
console.log(typeof myObj);