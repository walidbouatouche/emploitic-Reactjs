import React from 'react';
import store from'./redux/store';
import {Provider} from "react-redux";
import Home from'./pages/home'
import Login from'./pages/login'
import List from'./pages/list'
import Offreviewer from'./pages/offreviewer'
import Profil from'./pages/profil'
import Auth from'./services/auth'
import { Switch,   BrowserRouter as Router,Route} from'react-router-dom'
class App extends React.Component {
 
  render() {
    return (  
    <Router>

  

  <Switch>
      <Route path="/" exact component={Home}></Route>
  
      <Route path="/list/:id" exact  component={List}></Route>
      <Route path="/login" exact  component={Login} />
      <Route path="/offreviewer/:id" exact  component={Offreviewer }></Route>
     
      
      <Route path="/profil" exact  component={Profil} />
   
 
      </Switch>
      </Router>);
  }
}



function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}


export default AppWithStore;