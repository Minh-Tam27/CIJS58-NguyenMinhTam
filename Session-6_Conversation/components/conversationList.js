import Conversation from "./conversation.js";
import CreateConversation from "./createConversation.js";

class ConversationList {
  $btnCreateConversation;
  createConversation

  conversationList;
  $conversationContainer;
  activeConversation;
  onChangeActive;

  constructor(onChangeActive){
    this.$btnCreateConversation = document.createElement('button');
    this.$btnCreateConversation.innerHTML = 'Thêm cuộc trò chuyện';
    this.$btnCreateConversation.addEventListener('click', this.openModal);
    this.createConversation = new CreateConversation()
    this.setUpConversationListener();

    this.conversationList = [];

    this.onChangeActive = onChangeActive;
    this.$conversationContainer = document.createElement('div');
  }
  setUpConversationListener = () => {
    //onSnapshot: lấy sự kiện cho Firebase, kèm theo ảnh chụp db khi có sự thay đổi data
    //docChanges: lấy những sự thay đổi của db
    db.collection('conversations').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const conversation = new Conversation(
          change.doc.id,
          change.doc.data().name,
          change.doc.data().users,
          (conversation) => {
            this.onChangeActive(conversation);
          }
        )
        this.conversationList.push(conversation);
        conversation.initRender(this.$conversationContainer);
      })
    })
  }
  openModal = () => {
    this.createConversation.setVisible(true)
  }
  setActiveConversation = (conversation) => {
    if(this.activeConversation){
      this.activeConversation.setActive(false);
    }
    this.activeConversation = conversation;
    this.activeConversation.setActive(true);
  }
  initRender = (container) => {
    const div = document.createElement('div');
    div.classList.add("item");
    div.style.width = "200px";

    div.appendChild(this.$btnCreateConversation);
    div.appendChild(this.$conversationContainer);
    this.createConversation.initRender(div);

    container.appendChild(div);
  }
}
export default ConversationList