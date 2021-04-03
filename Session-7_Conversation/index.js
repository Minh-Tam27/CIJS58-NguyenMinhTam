// import Register from './register.js';
import Login from './login.js';
import Main from './main.js';
 
const container = document.getElementById('app');

// const register = new Register();
const login = new Login();
// register.initRender(container);
// login.initRender(container);

class App {
  activeScreen
  container
  constructor () {
    this.container = document.getElementById('app');
    this.setUpFirebaseAuthListener();
  }
  setActiveScreen (screen){
    if (this.activeScreen) {
      this.container.innerHTML = "";
    }
    this.activeScreen = screen;
    this.activeScreen.initRender(this.container);
  }
  setUpFirebaseAuthListener = () => {
    //luu tru thong tin
    firebase.auth().onAuthStateChanged((user) => {
      if(user && user.emailVerified) {
        const main = new Main();
        this.setActiveScreen(main);
      }
      else {
        const login = new Login();
        this.setActiveScreen(login);
      }
    })
  }
}
const app = new App (container);
app.setActiveScreen(login);

export default app;