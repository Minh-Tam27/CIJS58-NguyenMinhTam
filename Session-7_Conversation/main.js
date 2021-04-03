import Composer from "./components/composer.js";
import ConversationList from "./components/conversationList.js";
import Title from "./components/title.js";
import MessageList from './components/messageList.js'
import ConversationInfo from "./components/conversationInfo.js";

class Main {
  conversationList;
  title;
  activeCon;
  composer;
  messageList;
  conversationInfo;

  constructor() {
    this.conversationList = new ConversationList((conversation) => {
      this.setActiveConversation(conversation);
    });
    this.title = new Title('', 0);
    this.composer = new Composer();
    this.messageList = new MessageList();
    this.conversationInfo = new ConversationInfo();
  }
  setActiveConversation = (conversation) => {
    this.activeCon = conversation;
    this.conversationList.setActiveConversation(conversation);
    this.title.setActiveConversation(conversation);
    this.composer.setActiveCon(conversation);
    this.messageList.setActiveConversation(conversation);
  }
  initRender = (container) => {
    const div = document.createElement('div');
    div.classList.add("d-flex", "item");
    div.style.height = "100vh";

    const content = document.createElement('div');
    content.classList.add("grow-1", "item", "d-flex", "col");
    this.title.initRender(content);
    this.conversationList.initRender(div);
    
    const div2 = document.createElement('div');
    div2.classList.add('item', 'grow-1', 'd-flex');

    const div3 = document.createElement('div');
    div3.classList.add('d-flex', 'item', 'grow-1', "col");

    this.messageList.initRender(div3); 
    this.composer.initRender(div3);
    
    div2.appendChild(div3);
    this.conversationInfo.initRender(div2);


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