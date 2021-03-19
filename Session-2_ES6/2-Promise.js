// setTimeout(() => {
//   console.log('hello');
// }, 0);
// console.log('world');

// //call-back function
// setTimeout(() => {
//   console.log('hello');
//   setTimeout(() => {
//     console.log('world');
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   console.log('abc');
// }, 1000);

// //Promise
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// })

// promise
// .then (() => {
//   console.log('hello 1');
// })
// .then (() => {
//   return promise
// })
// .then (() => {
//   console.log('hello 2');
// });

const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  }) 
}

delay(1000)
.then (() => console.log('Minh'))
.then (() => delay(1000))
.then (() => console.log('Tâm'));

// async function Hi() {
//   console.log('Hihihi')
//   await delay(1000)
//   console.log('Hehehe')
// }