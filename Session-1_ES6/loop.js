const arr = [1, 2, 3];
const obj = {foo: 'hey', bar: 'hi'}
for (let i=0; i<=arr.length; i++)
{
  console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

//of: không lặp qua các giá trị k lặp dc (object,...)
for (let element of arr){
  console.log(element);
}

//in: lặp qua
for (let key in obj){
  console.log(key);
}