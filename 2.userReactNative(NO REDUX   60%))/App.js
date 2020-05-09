import React from "react";
import Home from './pages/home'
import List from './pages/list'
import Myoffre from './pages/myoffre'
import Profil from './pages/profil'
import Offreviewer from './pages/offreviewer'
import Singup from './pages/singup'
import { Router, Scene, Drawer } from 'react-native-router-flux'
import MenuIcon from './components/menuIcon'
import Sidemenu from './components/sidemenu'

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

          <Scene backButtonTintColor="#FFFFFF" titleStyle={{ color: '#FFFFFF', }}
            key="singup" component={Singup} title="Singup" />
        </Drawer>
        
        <Scene titleStyle={{ color: '#FFFFFF', }}
          key="list" component={List} title="List" />
        <Scene titleStyle={{ color: '#FFFFFF', }}
          key="offreviewer" component={Offreviewer} title="Offreviewer" />
      </Scene>

    </Router>

  )

}




export default App

