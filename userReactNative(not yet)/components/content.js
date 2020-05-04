
import React ,{Component}from "react"
import { Dimensions,ScrollView , View, Text ,StyleSheet ,TextInput ,TouchableOpacity} from 'react-native'
import { Reducer } from "react-native-router-flux";
const windowHeight = Dimensions.get('window').height;

export default class Content extends Component{
    state= {
        item:"" ,
    todolist:[]
        }

addItem=()=>{
   let newtodo=this.state.todolist ;
   const id=Math.random();
   const item=this.state.item;
   newtodo.push({item,id}) ;
   this.setState({newtodo}) ;
   console.log(this.state.todolist);   
}
handleItem=(text)=>{
 this.setState({item:text})
console.log(text);

}
showItem=(item)=>{

    alert("Id: "+item.id+"Name:"+item.item);

}
render(){
return( 
    
    <View>
         
<TextInput
 placeholder="Item"
 placeholderTextColor="#A52A2A" 
 style={style.input} 
 underlineColorAndroid="transparent"
 onChangeText={this.handleItem}
 autoCapitalize="none"
 />
<TouchableOpacity  onPress={this.addItem} style={style.submit}>
         <Text style={style.textColorSubmit}> Add</Text>
         </TouchableOpacity>
         <View>

         <ScrollView style={style.scrollView}>
         {
         this.state.todolist.map((item,index)=>
         (<TouchableOpacity
         key={item.id}> 
         
         
         <Text  onPress={()=>this.showItem(item)} style={style.item} > {item.item}</Text>
         </TouchableOpacity> 
            
            ) )}

            </ScrollView>
         </View>
         <View>

 </View>
 </View>



    
     
     
     )

}

}


const style=StyleSheet.create({

    input:{
        borderColor:"#A52A2A",
        borderWidth:1,
        height:40,
        margin:15

    } ,
    submit:{

        backgroundColor:"#A52A2A" ,
        padding:10,
        margin:10,
      
    } ,
    textColorSubmit:{
        color:"white"
    } ,
    item:{
        
        border:"#A52A2A",
        borderWidth:1,
        height:40,
        margin:15,
        padding:20 ,
        color:"red"
    } ,
    scrollView: {
      
        height: windowHeight - ((windowHeight / 8)*2.5),
      },
})