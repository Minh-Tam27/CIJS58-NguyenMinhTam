import ConversationList from "./components/conversationList.js";
import Title from "./components/title.js";

class Main {
  conversationList;
  title;
  activeCon;

  constructor() {
    this.conversationList = new ConversationList((conversation) => {
      this.setActiveConversation(conversation);
    });
    this.title = new Title('', 0);
  }
  setActiveConversation = (conversation) => {
    this.activeCon = conversation;
    this.conversationList.setActiveConversation(conversation);
    this.title.setActiveConversation(conversation);
  }
  initRender = (container) => {
    const div = document.createElement('div');
    div.classList.add("d-flex", "item");
    div.style.height = "100vh";

    const content = document.createElement('div');
    content.classList.add("grow-1", "item", "d-flex", "col");
    this.title.initRender(content);
    this.conversationList.initRender(div);
    
    const conversationInfo = document.createElement('div');
    conversationInfo.style.width = '200px';
    
    const div2 = document.createElement('div');
    div2.classList.add('item', 'grow-1', 'd-flex');

    const div3 = document.createElement('div');
    div3.classList.add('d-flex', 'item', 'grow-1', "col");

    const messList = document.createElement('div');
    messList.classList.add("grow-1");

    const composer = document.createElement('div');
    composer.classList.add("b-border");
    composer.innerHTML='Chat...';

    div3.appendChild(messList);
    div3.appendChild(composer);
    
    div2.appendChild(div3);
    div2.appendChild(conversationInfo);


    div.appendChild(content);
    content.appendChild(div2)
    container.appendChild(div);
  }
  onChangeActive = (conversation) => {
    this.activeCon = conversation;
    this.conversationList.setActiveConversation(conversation);
    this.title.setActiveConversation(conversation);
  }
}

export default Main;