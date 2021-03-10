const x = 1;
// wrong x=2;
const arr = [];
arr.push(123);

//HOISTING
// console.log(a);
//wrong: Cannot access 'a' before initialization
let a = 1;

var b = 1;
console.log(b);

//SCOPE
let bar ='bar';
if (bar == 'bar'){
  var foo = 'foo'
}
console.log(foo);