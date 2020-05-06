import React from 'react';
 
import {View , Button ,Dimensions}from "react-native"
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements'

const Layout=(props)=>{



    return(<View>
        <View style={{height:Dimensions.get("window").height/10  }
        }>
        <Header
        
        backgroundColor="#FF4500"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'EMPLIOTIK', style: { color: '#fff' } }}
 
/>
 
        </View>
     <View>
         {props.children}
         </View>
         </View>
    )
}

export default Layout ;