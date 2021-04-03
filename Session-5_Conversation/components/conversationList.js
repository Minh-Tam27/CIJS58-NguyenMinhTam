import Conversation from "../../Session-6_Conversation/components/conversation.js";
import CreateConversation from "./createConversation.js";

class ConversationList {
  $btnCreateConversation;
  createConversation

  conversationList;
  constructor(){
    this.$btnCreateConversation = document.createElement('button');
    this.$btnCreateConversation.innerHTML = 'Thêm cuộc trò chuyện';
    this.$btnCreateConversation.addEventListener('click', this.openModal);
    this.createConversation = new CreateConversation()
    this.setUpConversationListener();

    this.conversationList = [];
  }
  setUpConversationListener = () => {
    //onSnapshot: lấy sự kiện cho Firebase, kèm theo ảnh chụp db khi có sự thay đổi data
    //docChanges: lấy những sự thay đổi của db
    db.collection('conversations').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const conversation = new Conversation(
          change.doc.id,
          change.doc.data().name,
          change.doc.data().users.length
        )
        this.conversationList.push(conversation);
      })
    })
  }
  openModal = () => {
    this.createConversation.setVisible(true)
  }
  initRender = (container) => {
    const div = document.createElement('div');
    div.classList.add("item");
    div.style.width = "200px";

    div.appendChild(this.$btnCreateConversation);
    this.createConversation.initRender(div);

    container.appendChild(div);
  }
}
export default ConversationList