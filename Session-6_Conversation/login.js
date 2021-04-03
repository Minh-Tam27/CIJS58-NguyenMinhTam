import app from './index.js'
import Register from './register.js'

class Login {
  $txtEmail;
  $txtPassword;
  $formLogin;
  $btnSubmit;

  constructor () {
    this.$txtEmail=document.createElement("input");
    this.$txtEmail.type = "email";
    this.$txtEmail.placeholder = "Enter email ";

    this.$txtPassword=document.createElement("input");
    this.$txtPassword.type = "password";
    this.$txtPassword.placeholder = "Enter Password";

    this.$formLogin = document.createElement("form");

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.innerHTML = "Login";
    this.$btnSubmit.type = "submit";
  }

  initRender = (container) => {
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('d-flex', 'flex-column', 'centering');
    const title = document.createElement('h2');
    title.innerHTML = "Login";
    flexContainer.appendChild(title);

    flexContainer.appendChild(this.$txtEmail)
    flexContainer.appendChild(this.$txtPassword)
    flexContainer.appendChild(this.$btnSubmit)

    const linkRegister = document.createElement('a');
    linkRegister.innerHTML = 'create an account';
    linkRegister.addEventListener ('click', this.toRegister)

    flexContainer.appendChild(linkRegister)

    this.$formLogin.appendChild(flexContainer);
    this.$formLogin.addEventListener('submit', this.login)
    container.appendChild(this.$formLogin)
  }

  toRegister = () => {
    const register = new Register();
    app.setActiveScreen(register);
  };

  login = (event) => {
    event.preventDefault();
    const email = this.$txtEmail.value
    const password = this.$txtPassword.value
    //firebase check email va password 
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((UserCredential) => {
      console.log(UserCredential);
    });
  }
}

export default Login;