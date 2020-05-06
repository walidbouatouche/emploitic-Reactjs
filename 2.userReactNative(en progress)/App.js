import React from "react";
import Home from'./pages/home'
import List from'./pages/list'
import { Router, Scene } from 'react-native-router-flux'
 

function  App(){
return(

  <Router>

  <Scene key = "root">
     <Scene  hideNavBar={true} key = "home" component = {Home} title = "Home" initial = {true} />
     <Scene hideNavBar={true}  key = "list" component = {List} title = "List"   />
  </Scene>
</Router>

)

}




export default  App