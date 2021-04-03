class CreateConversation {
  $backDrop;
  $formCreate;
  $txtConversationName;
  $btnCreate;
  $btnClose;

  constructor(){
    this.$backDrop = document.createElement('div');
    this.$backDrop.style.height = '100vh';
    this.$backDrop.style.width = '100vw';
    this.$backDrop.style.position = 'fixed';
    this.$backDrop.style.top = '0';
    this.$backDrop.style.left = '0';
    this.$backDrop.classList.add("centering");
    this.$backDrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    this.$backDrop.style.display = 'none';
    
    this.$formCreate = document.createElement('form');
    this.$formCreate.addEventListener('click', this.onSubmit)
    
    this.$txtConversationName = document.createElement('input');
    this.$txtConversationName.type = 'text';
    this.$txtConversationName.placeholder = 'Nhập tên cuộc trò chuyện';

    this.$btnCreate = document.createElement('button');
    this.$btnCreate.type = 'submit'
    this.$btnCreate.innerHTML = 'Create';

    this.$btnClose = document.createElement('button');
    this.$btnClose.type = 'button'
    this.$btnClose.innerHTML = 'Close';
    this.$btnClose.addEventListener('click', () => {
      this.setVisible(false);
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.$txtConversationName.value;
    const authUser = firebase.auth().currentUser;
    // truyền document vào collection
    db.collection('conversations').add({
      name: name,
      creator: authUser.email,
      users: [authUser.email]
    })
    .then(() => {
      this.setVisible(false);
    })
  }
  setVisible = (value) => {
    if (value == true){
      this.$backDrop.style.display = 'flex';
    }
    else {
      this.$backDrop.style.display = 'none';
    }
  }

  initRender = (container) => {
    const div = document.createElement('div');
    // div.innerHTML = 'Baby';
    div.style.width = "500px";
    div.style.padding = "20px";
    div.style.backgroundColor = "white";
    // div.style.opacity = '1';
    const title = document.createElement('h3');
    title.innerHTML = 'Tạo 1 cuộc trò chuyện mới';
    div.appendChild(title);

    this.$formCreate.appendChild(this.$txtConversationName);
    this.$formCreate.appendChild(this.$btnCreate)
    this.$formCreate.appendChild(this.$btnClose)
    
    div.appendChild(this.$formCreate)
    this.$backDrop.appendChild(div);
    container.appendChild(this.$backDrop);
  }
}
export default CreateConversation