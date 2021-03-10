let a = true;
if (a) {
  console.log("true");
} else {
  console.log("false");
}

const bar = 'bar'
switch (bar) {
  case 'bar': console.log("1 case"); break;
  case 'bar2': console.log("2 case"); break;
  case 'bar3': console.log("3 case"); break;
  default: console.log("no case");
}

let isEven = 'even';
let x = 3;
if (x%2 === 0) {
  isEven = "even";
}
else {
  isEven = 'odd'
}

isEven = x%2 === 0 ? "even" : "odd";
console.log(isEven);