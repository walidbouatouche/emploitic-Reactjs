import React from 'react';
 
import {View , ScrollView,  Dimensions}from "react-native"
 
import { Header } from 'react-native-elements'
 
const Layout=(props)=>{



    return(
         
    
    <View >
     
        <Header

        backgroundColor="#FF4500"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'EMPLIOTIK', style: { color: '#fff' } }}
 
/>
 
     <View   >
         
  
         {props.children}
      
         </View>

       
         </View>
       
    )
}

export default Layout ;