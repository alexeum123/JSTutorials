// function
function DoSomething() {
}

// alternative def
const DoSomething = () => {
}

// exporting function to have access
export default function DoSomething() {
}

export const DoSomething = () => {
}

// example
const MyComponent = () => {
    return <div></div>
}

// anonymous functions written inline (no name function)
<button onClick = {() => { 
    console.log("hello world");
}}
></button>


// original code
let age = 10;
let name = "Pedro";
if (age>10) {
    name = "Pedro"
} else {
    name = "Jack"
}


//ternary- if condition true, then ? true, : else
let age = 16;
let name = age > 10 ? "Pedro" : "Jack"


//react application with ternary, affects UI based on state
const Component = () => {
    return age>10 ? <div>Pedro</div> : <div>Jack</div>
};


//create object called person
const person = {
    name: "Pedro",
    age: 20,
    isMarried: false.
};
const name = person.name;
const age = person.age;
const isMarried = person.isMarried;
//destructuring property of object
const {name, age, isMarried} = person;


//object redundancy optimization
const name = "Pedro";
const isMarried = false;
const person = {
    name, //name: name,
    age: 20,
    isMarried,
};


//... manipulation
//person2 exact same as ...person, except name is "Jack"
const person = {
    name: "Pedro",
    age: 20,
    isMarried: false.
};
const person2 = {...person, name: "Jack"}


//copy array, but add more with ...
const names = ["Pedro", "Jack", "Jessica"]
const names2 = [...names, "Joel"]


//working with Map, Filter, (reduce)
.map()
.filter()
.reduce()

//Array Manipulation
//could add 1 with a for loop
let names = ["Pedro", "Jack", "Jessica"];
for(let i=0)....
//add 1 after each name
names.map((name)=> {
    return name + 1 //becomes Pedro1, Jack1, Jessica1
});
//every element becomes Joe
names.map((name)=> {
    return "Joe" 
});

//UI Array Manipulation
//console log Pedro, Jack, Jessica
names.map((name)=> {
    console.log(name)
});
//display lists in react, affect UI by creating header
names.map((name)=> {
    return <h1>{name}</h1>
});

//name is argument from names
//make names an argument without any "Pedro"'s
names.filter((name)=> {
    return name !== "Pedro"
});




//Async + Await + Fetch












