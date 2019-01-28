import React from 'react';
import { BackHandler } from 'react-native';
import Backend from './Backend';
import { GiftedChat } from 'react-native-gifted-chat';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
//import {StackNavigator} from 'react-navigator';
//import Home from './Home';


//import home for checking
/*
const AppStackNavigator = new StackNavigator({
  WelcomeScreen: { screen: Home},
  LoginScreen: { screen: App },
});
*/
class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {
    
  }
  render() {
    return (
      
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: this.props.uid,
          //name: 'android',
          //name from khatri code
          
          name: this.props.name,
        }}
      />
      //<Text>hello {this.props.navigation.state.params.name}</Text>
    );
  }
  componentDidMount() {
    if(this.props.student){
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
          Actions.student_timeline(); // works best when the goBack is async
          return true;
        });
      }
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
//    console.log("current user id:")
 //   console.log(c_id)
    Backend.closeChat();
  }
}
mapStateToProps=(state)=>{
  const{name}= state.teacher
  const{uid, student}=state.auth
  //const {selectedStudent}= state.student
  //console.log(selectedTeacher.uid)
  //const{t_id}=selectedTeacher.uid
//  const{s_id}= selectedStudent.uid
 // console.log(s_id)
  return{name, uid, student}
}

export default connect(mapStateToProps)(Chat)