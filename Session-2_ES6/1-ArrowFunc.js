// console.log(sum(1,2));
// console.log(sub(1,2)); => HOISTING: do sub là biến được khai báo sau khi dùng
function sum (a,b) {
  return a + b; //return: tái sử dụng kết quả
}

const sub = function (c, d) {
  return c - d;
}

//CÚ PHÁP ARROW FUNC
const multi = (a1, b1) => {
  return a1 * b1;
}

//sử dụng khi method đơn giản
const divide = (c1, d1) => c1/d1;

const myMath = {};
myMath.sum = sum;
myMath.sub = function () {};
myMath.multi = () => {};

//viết func: ax + b = 0
const ptB1 = (a, b) => {
  if (a == 0) {
    return x = b;
  }
  else if (b == 0) {
    return " "
  }
  else {
    return x = -b/a;
  }
}
//tính S tam giác
const dientich = (a,h) => divide(multi(a,h));

const btnClick = document.getElementById("clickBtn")

//function: this trả về html button
// btnClick.addEventListener('click', function() {
//   console.log(this);
// })

//arrow function: this trả về ....
btnClick.addEventListener('click', () => {
  console.log(this);
})