import React from 'react';
 
import {View ,ScrollView, Button ,Dimensions}from "react-native"
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements'

const Layout=(props)=>{



    return(<View>
     
        <Header
  style={{height:Dimensions.get("window").height/10  }}
        backgroundColor="#FF4500"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'EMPLIOTIK', style: { color: '#fff' } }}
 
/>
 
     
     <View>
         {props.children}
         </View>
         </View>
    )
}

export default Layout ;