import React, { Component } from 'react';
import { createDrawerNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'; 
import { createStackNavigator} from 'react-navigation-stack'
import Main from '../component/main';
import Gui from '../component/Gui';
class navigation extends React.Component {
    render() {
        return (
            <MainNavigator />
        )
    }


}

const MainNavigator = createStackNavigator({
  Main:
  {
      screen:Main
  },
  Gui:{
      screen:Gui
  },


});




export default createAppContainer(MainNavigator);