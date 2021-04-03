import ConversationList from "./components/conversationList.js";

class Main {
  conversationList
  constructor() {
    this.conversationList = new ConversationList();
  }
  initRender = (container) => {
    const div = document.createElement('div');
    div.classList.add("d-flex", "item");
    div.style.height = "100vh";

    const content = document.createElement('div');
    content.classList.add("grow-1", "item");
    
    this.conversationList.initRender(div);
    div.appendChild(content);
    container.appendChild(div);
  //   const p = document.createElement('p');
  //   p.innerHTML = 'Hi, User';
  //   const btnLogout = document.createElement('button');
  //   btnLogout.innerHTML = 'Log out';
  //   btnLogout.addEventListener('click', () => {
  //     firebase.auth().signOut();
  //   })
    
  //   container.appendChild(p);
  //   container.appendChild(btnLogout);
  }
}

export default Main;