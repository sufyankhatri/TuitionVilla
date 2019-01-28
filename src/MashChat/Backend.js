import firebase from '../config/FirebaseConfig';
class Backend {
  
  uid = '';
  messagesRef = [];
  // initialize Firebase Backend
  
  constructor() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setUid(user.uid);
  //     } else {
  //       firebase.auth().signInAnonymously().catch((error) => {
  //         alert(error.message);
  //       });
  //     }
  //   });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }

  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  //send the message to the Backend
  sendMessage(message) {
      var today = new Date().getTime()
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: today,
       //createdAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
  }

  
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();