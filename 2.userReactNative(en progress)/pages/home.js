import React from "react" ;
import Layout from'../layout'
import {View  , ScrollView}from "react-native"
import lists from'../static/cat.json'
import { ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

function Welcom() {

  const jumpTo=(id)=>{
    Actions.list(id)

  }
return(
    <View    >

 
  
 
 
 
    <Layout>
    <View>
    <ScrollView>
  {
    lists.map((item) => (
      <ListItem
 
      
      onPress={()=>jumpTo(item.id)}
        key={item.id}
        leftAvatar={{ source: { uri: item.imguri } }}
        title={item.title}
        subtitle={item.title}
        bottomDivider 
        chevron={{ color: '#FF4500' }}
       
      />
    ))
  }
  
     </ScrollView>
</View>
    </Layout> 
    
    </View>)


}

  
export default  Welcom