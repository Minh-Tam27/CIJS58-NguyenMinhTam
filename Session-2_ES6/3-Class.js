// const altium = {
//   name: 'Altium',
//   age: 3
// }
// const proteus = {
//   name: 'Proteus',
//   age: 8
// }

//METHODS
class Person {
  name = 'Arduino';
  age = '18';
  address = '';
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  setName (name) {
    this.name = name;
  }
  sayHi () {
    console.log("hello " + this.name);
  }
}
//new : chạy vào constructor
const altium = new Person("Altium",3);
const proteus = new Person("Proteus", 8);
console.log(altium, proteus);

altium.setName('Hi')
console.log(altium.sayHi());

//KẾ THỪA
class Student extends Person {
  className = '';
  grade = 0;
  
  constructor (name, age, className, grade) {
    super(name, age); //con trỏ đến class cha (class Person)
    this.className = className;
    this.grade = grade;
  }

  display = () => {
    console.log('this is a method');
  }

  sayHi () {
    super.sayHi();
    console.log('I am a student');
  }
}

const Abc = new Student('Abc',10,'CI 58', 8);
const Bcd = new Student('Bcd',11,'CI 58', 7);
console.log(Abc, Bcd);
console.log(Abc.sayHi()); //có khả năng overwrite


//ADD FORM EX
const app = document.getElementById('app');
const btnAdd = document.getElementById('btn');

btnAdd.addEventListener('click', () => {
  myForm = new MyForm('Click');
  myForm.render(app);
});
class MyForm {
  input = null;
  button = null;
  constructor(text) {
    this.input = document.createElement('input');
    this.button = document.createElement('button');
    this.button.addEventListener('click', () => {
      console.log(this.input.value);
    })
    this.button.innerHTML = text
  }

  render = (container) => {
    const div = document.createElement('div');
    div.appendChild(this.input);
    div.appendChild(this.button);
    container.appendChild(div)
  }
}