import React from "react" ;
 
import {View , Button ,Dimensions}from "react-native"
function Welcom() {


return(
<View style={
{
    flex:1 ,
    flexDirection:'column',
    backgroundColor :"#FFFFFF" ,
    height:Dimensions.get("window").height
}
}>
<View style={
    {
        backgroundColor:"#FF4500",
        height:Dimensions.get("window").height/10,
        borderBottomEndRadius: 30,

    }
}>

</View>
<View style={{
     height:Dimensions.get("window").height -(Dimensions.get("window").height *2/10) ,
   
   
    
    

}}>

<View  style={{margin:"auto"}}>
<Button  
 title=" Welcom to EMPLOITIK Click hier"
color="#FF4500"



> </Button>
</View>

</View>
<View style={{ height:Dimensions.get("window").height/10 ,backgroundColor:"#FF4500"}}>

</View>
</View>)


}

export default  Welcom