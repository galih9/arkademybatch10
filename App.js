import React, {Component} from 'react';
import {
   createStackNavigator,
   createAppContainer
} from 'react-navigation';

import LoginScreen from './screen/Login';
import FeedScreen from './screen/Home/Feeds';
import ModalScreen from './screen/Modal';

class App extends Component{
  render(){
    return(
      <AppContainer />

    );
  }

}

const AppNavigator = createStackNavigator({
  
  Feeds: {
    screen: FeedScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Modal: {
    screen: ModalScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },

  initialRouteName: 'Feeds'
});

const AppContainer = createAppContainer(AppNavigator)

export default App