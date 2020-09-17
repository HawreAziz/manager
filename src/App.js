import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import RouterComponent from './components/Router';


class App extends Component {
  componentDidMount(){
    try{
        firebase.initializeApp({
          apiKey: "AIzaSyD3wVNwvDVYEBobj_AEc-VRMvVpVD65rQk",
          authDomain: "manager-b90fe.firebaseapp.com",
          databaseURL: "https://manager-b90fe.firebaseio.com",
          projectId: "manager-b90fe",
          storageBucket: "manager-b90fe.appspot.com",
          messagingSenderId: "1094604482453",
          appId: "1:1094604482453:web:b3f941a4e39aef8c8ff89c",
          measurementId: "G-6171E7WBTW"
        });
    }catch(error){
      console.log('Already connected to firebase');
    }
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store} >
        <View style={{ flex: 1 }}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
};

export default App;
