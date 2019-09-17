import React,{Component} from 'react';
import { Button,View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/index'
import Router from './Config/Router'
export default class App extends Component {
constructor()
{
  super();
  this.state=
  {

  }
}
render()
{


  return (
    <Provider store={store}>
      <Router/>
<Button onPress={()=>{this.props.navigation.navigate('Gui')}} title="Goto Gui Page"></Button>
     </Provider>
  );
}
}
