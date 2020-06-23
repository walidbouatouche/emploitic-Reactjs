import React from "react";
import Home from './pages/home'
import List from './pages/list'
import Myoffre from './pages/myoffre'
import Profil from './pages/profil'
import Offreviewer from './pages/offreviewer'
import Singup from './pages/singup'
import Login from './pages/login'
import { Router, Scene, Drawer } from 'react-native-router-flux'
import MenuIcon from './components/menuIcon'
import Sidemenu from './components/sidemenu'
import { Provider } from 'react-redux'
import { store } from './_helpers/store'
import Auth from './_helpers/auth'
/* We are completely  use to our project 
* https://github.com/aksonov/react-native-router-flux
*/
/*  
* https://github.com/aksonov/react-native-router-flux
*/

const App = () => {



  return (
    <Router navigationBarStyle={{ backgroundColor: '#FF4500' }}  >
      <Scene key="root">
        <Drawer hideNavBar={true}
          key="drawer"
          contentComponent={Sidemenu}
          drawerWidth={300}
          drawerIcon={< MenuIcon ></MenuIcon>}
        >
          <Scene
            key="home" component={Home} title="Home" initial={true}
            titleStyle={{ color: '#FFFFFF', }}
          />
          <Scene backButtonTintColor="#FFFFFF" titleStyle={{ color: '#FFFFFF', }}
            key="myoffre" component={Myoffre} title="Myoffre" />
          <Scene backButtonTintColor="#FFFFFF" titleStyle={{ color: '#FFFFFF', }}
            key="profil" component={Profil} title="Profil" />

        </Drawer>
        {
          /*
   
          * this routong use Outer from drawer 
          * cause Drawer disabled params nav
          
           */
        }

        <Scene backButtonTintColor="#FFFFFF" titleStyle={{ color: '#FFFFFF', }}
          key="singup" component={Singup} title="Singup" />
        <Scene titleStyle={{ color: '#FFFFFF', }}
          key="list" component={List} title="List" />
        <Scene titleStyle={{ color: '#FFFFFF', }}
          key="offreviewer" component={Offreviewer} title="Offreviewer" />
      </Scene>

    </Router>

  )

}

const AppWithStore = () => {
  return (<Provider store={store}>
    <App />
  </Provider>)
}



export default AppWithStore;