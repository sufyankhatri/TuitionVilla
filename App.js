import React, { Component } from 'react';
import Routes from './src/Components/Routes';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import WelcomeScreen from './src/Components/WelcomeScreen';
export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBe0wvJ4aFxGRlDUL-2XxO4-JyAo92FDfk",
      authDomain: "tuitionvilla-fa8dd.firebaseapp.com",
      databaseURL: "https://tuitionvilla-fa8dd.firebaseio.com",
      projectId: "tuitionvilla-fa8dd",
      storageBucket: "tuitionvilla-fa8dd.appspot.com",
      messagingSenderId: "231641434744"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}