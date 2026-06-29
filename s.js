let student = {
    name:"MANISH",
    age:20,
    city:"KHANDWA"
};
console.log(student);

// do notation

console.log(student.name);


// breket notation
console.log(student["age"]);

//add
student.phone=123345;
console.log(student);


for(key in student){
    console.log(key,student[key]);

}
let person={
    name:"manish",
    age:20,
    address:{
        city:"khandwa",
        jagah:"main",
        state:"mp"
    }
};
console.log(person);
let array=[a={name:"a"},b={name:"b"},c={name:"c"}];
console.log(array);
console.log(person.address.city);
console.log(person["address"]["city"]);
console.log(array[0].name);


let name="manish";
console.log("hello"+name+"more");
console.log('hello ${name} etghue eugit gjh') //back tick

function greet1(name="manish"){
    console.log('hello ${name}');

}
greet1();
let [a1,b1]=[10,20];

console.log(a1);
console.log(b1);


let {name1,age1}=student;
console.log(student.name);
console.log(student.age); 


let names= ["gagan","ishan","yogesh"]
let q1 = names.map(name => name.toUpperCase());
console.log(q1);

// question 1
const products =[
    { id: 1, name: "Laptop"},
    { id: 2, name: "Mobile"},
    { id: 3, name: "Headphones"}
];
const Pnames = products.map(products => products.name);
console.log(Pnames)

// quetion 2
const mans=["apple","banana","cat","elephant","dog"];
const q3=mans.filter(mans => mans.length>5);
console.log(mans);
console.log(q3);

// question 3
const users=[
    {Name:"A", age:16},
    {Name:"B", age:22},
    {Name:"C", age:19}
];
const q4 = users.filter(users => users.age >=18);
console.log(q4);

// question 4
const word = ["hello", "world", "javascript"];

const totalChars = word.reduce(
    (total, word) => total + word.length,
    0
);

console.log(totalChars); 
const joined = word.reduce(
    (join, word) => join + word
);

console.log(joined); 


// question 5
const nums=[1,2,3,4,5,6,7,8];
const q6=nums.filter(num => num%2 ===0).map(num=> num*num);
console.log(q6);

// questio 6
const employees = [
    { name: "A", salary: 30000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 50000 }
];

const q7 = employees.reduce((total, employee) => total += employee.salary,0);
console.log(q7);


// question 7




// question 8

const marks1 =[80,90,70,60];
const q8=marks1.reduce(function(total,n){
    return total+=n;
},0)/marks1.length;
const q8arr=marks1.reduce((total,n)=>total+=n,0)/marks1.length;
console.log(q8);
console.log(q8arr);

// question 9
const fruits=[
    "apple","banana","apple","orange","banana","apple"
];
const q9 = fruits.reduce(function(occ, fruit){
    occ[fruit] = (occ[fruit] || 0) + 1;
    return occ;
},{});
const q9arr = fruits.reduce((occ, fruit) => {
    occ[fruit] = (occ[fruit] || 0) + 1;
    return occ;
}, {});
console.log(q9);
console.log(q9arr);

// question 10
const students = [
    {name:"Utkarsh", marks:[80,90,85]},
    {name:"manish", marks:[95,92,98]},
    {name:"satish", marks:[60,70,65]}
];

const q11rr = students.map(s => ({
    name: s.name,
    avg: s.marks.reduce((total, n) => total + n, 0) / s.marks.length
})).filter(s => s.avg > 85);
console.log(q11rr);

// question 11 (group products by category)
const products2 = [
    {name: "laptop", category: "electronics"},
    {name: "phone", category: "electronics"},
    {name: "shirt", category: "clothing"}
];

const q13 = products2.reduce(function(group, product){
    if(!group[product.category]){
        group[product.category] = [];
    }
    group[product.category].push(product.name);
    return group;
},{})
console.log(q13);

// question 12
const users12 = [];