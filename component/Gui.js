import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';
import { Appbar,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SliderBox } from 'react-native-image-slider-box';

  
export default class Gui extends Component{
constructor()
{
    super();
    this.state=
    {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    }
}
render()
{
    return(
        <View style={{borderRadius:4}}>
          <ScrollView style={{flex:1}}>

  <Appbar.Header style={{backgroundColor:'#fff',borderRadius:5,}}>     
   <Appbar.Content/>
      <ImageBackground
          style={{marginLeft:10,width:50, height:50,position:'absolute'}}
          source={require('../assets/capture.JPG')}>
          </ImageBackground>
         
         <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,justifyContent:"center",alignItems:"center"}}>
    <TouchableOpacity>
    <Button style={{flex:1,width:100,height:30,marginRight:7,color:'#32280B',backgroundColor:'#FCDE00'}}  mode="contained">Master</Button>
    </TouchableOpacity>
          
           <TouchableOpacity>
           <Button style={{flex:1,width:70,height:30,marginRight:5,backgroundColor:'#2196F3',color:'#FFF'}}  icon="" mode="contained">5</Button>
           </TouchableOpacity>

          </View>
       </Appbar.Header>
{/* end of header wagera images */}
<Text>{'\n'}</Text>

<View style={{flex:1,borderWidth:2.5,borderColor:'#ffffff',width:368,height:80,justifyContent:"center"}}>
<SliderBox images={this.state.images} />

 <View style={{backgroundColor: '#FFFFFE', flex: 0.5,   flexDirection: 'row',height: 100,padding: 20,}} />
<Text style={{paddingLeft:10,flex:1,color:'#1D96FB',fontSize:20,justifyContent:"center",alignItems:"center",backgroundColor:'#ffffff'}}>Veterans Day</Text>  
<Text style={{paddingLeft:10,flex:1,color:'#899BA7',fontSize:20,justifyContent:"center",alignItems:"center",}}>by Desbitrazza</Text> 
</View>
<Text>{'\n'}</Text>
<View style={{flexDirection:"row",}}>
<Text style={{flex:1,fontSize:30,color:'#073557',paddingLeft:14,flexDirection:'row'}}>In Progress<Text style = {{ color:'#F1F4FB',paddingLeft:6,
   }}>──────</Text></Text>

</View>

<View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
<Card>
     <Card.Content>
      <Title></Title>
      <Paragraph></Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/text.jpg')} style={{width:120,height:120}} />
    <Card.Actions>
    </Card.Actions>
  </Card>

          <Card>
     <Card.Content>
      <Paragraph></Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/pc.jpg')} style={{width:120,height:123,paddingTop:5}}/>
    <Card.Actions>
    </Card.Actions>
  </Card>

 <Card>
     <Card.Content>
      <Title></Title>
      <Paragraph></Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/new.JPG')} style={{width:120,height:121}}/>
    <Card.Actions>
    </Card.Actions>
  </Card>    
</View>
   
      
          
<View>
<Text style={{flex:1,fontSize:30,color:'#073557',paddingLeft:10}}>Top-Pick<Text style = {{ color:'#F1F4FB',paddingLeft:6,
   }}>─────────</Text></Text>
</View>
<View style={{flex:1}}>
<Card>
     <Card.Content>
      <Title></Title>
      <Paragraph></Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/fire.JPG')} />
    <Card.Actions>
    </Card.Actions>
  </Card>

</View>

          </ScrollView>

          <Card>
     <Card.Content>
      <Title></Title>
      <Paragraph></Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
 <View style={{flexDirection:'row'}}>

   <Text style={{paddingLeft:10,flex:1,color:'#1D96FB',fontSize:20,justifyContent:"center",alignItems:"center",backgroundColor:'#ffffff'}}>Autumn Season</Text>
      <Text style={{paddingLeft:10,flex:1,color:'#899BA7',fontSize:20,justifyContent:"center",alignItems:"center"}}>Created1Yearago</Text>
 </View>
 <Text>{'\n'}</Text>
      <View>
        <Text  style={{paddingLeft:10,flex:1,color:'#899BA7',fontSize:20,justifyContent:"center",alignItems:"center"}}>by Desbitrazza</Text>
      </View>
    </Card.Actions>
  </Card>


          
</View>








       
    )
}

}
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});