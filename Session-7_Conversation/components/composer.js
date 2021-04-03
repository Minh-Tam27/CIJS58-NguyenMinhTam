class Composer {
  $form
  $txtMess
  $btnSend

  constructor () {
    this.$form = document.createElement('form')
    this.$form.addEventListener('submit', this.onSendMess);

    this.$txtMess = document.createElement('input')
    this.$txtMess.type = 'text'
    this.$txtMess.placeholder = 'Chat'
    this.$txtMess.classList.add('grow-1')

    this.$btnSend = document.createElement('button')
    this.$btnSend.innerHTML = 'Send'
    this.$btnSend.type = 'submit'
  }
  setActiveCon(conversation) {
    this.activeConversation = conversation
  }
  onSendMess = (event) => {
    if (!this.activeConversation){
      alert('Plz choose a conversation');
      return
    }
    event.preventDefault();
    db.collection('messages').add({
      content: this.$txtMess.value,
      sender: firebase.auth().currentUser.email,
      conversationId: this.activeConversation.id
    })
  }

  initRender = (container) => {
    const div = document.createElement('div')
    div.classList.add("d-flex", "item")
    div.appendChild(this.$txtMess)
    div.appendChild(this.$btnSend)

    this.$form.appendChild(div);

    container.appendChild(this.$form)
  }
}
export default Composer