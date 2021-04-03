class Main {
  constructor() {

  }
  initRender = (container) => {
    const p = document.createElement('p');
    p.innerHTML = 'Hi, User';
    const btnLogout = document.createElement('button');
    btnLogout.innerHTML = 'Log out';
    btnLogout.addEventListener('click', () => {
      firebase.auth().signOut();
    })
    
    container.appendChild(p);
    container.appendChild(btnLogout);
  }
}

export default Main;