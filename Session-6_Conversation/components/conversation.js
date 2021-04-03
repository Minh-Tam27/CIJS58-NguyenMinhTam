class Conversation {
  id;
  name;
  users;
  onClick;
  
  $txtName;
  $txtNoOfUser;
  $container;
  constructor (id, name, users, onClick) {
    this.id = id;
    this.name = name;
    this.users = users;

    this.$txtName = document.createElement('p');
    this.$txtName.innerHTML = name;

    this.$txtNoOfUser = document.createElement('small');
    this.$txtNoOfUser.innerHTML = users + ' user(s)';
    this.$container = document.createElement('div');
    this.$container.classList.add('conversation-item');

    this.onClick  = onClick;
  }
  
  initRender = (container) => {
    this.$container.addEventListener('click', () => {
      this.onClick(this);
    })
    this.$container.appendChild(this.$txtName);
    this.$container.appendChild(this.$txtNoOfUser);
    // this.$container.classList.add('conversation-item');
    container.appendChild(this.$container);
  }

  setActive = (isActive) => {
    if (isActive == true){
      this.$container.classList.add('active');
    }
    else {
      this.$container.classList.remove('active');
    }
  }
}
export default Conversation;