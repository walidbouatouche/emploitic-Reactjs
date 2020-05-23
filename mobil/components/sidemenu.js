import React from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'
import { img } from '../images/imageside'
import { ListItem, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import Auth from '../services/auth'
const sideMenu = () => {

  const menu = [
    {
      id: 1,
      title: " Home",
      icon: "home",
      to: "home"
    },
    {
      id: 2,
      title: " My profil",
      icon: "person",
      to: "profil"
    },
    {
      id: 3,
      title: " My offres",
      icon: "book",
      to: "myoffre"

    }
  ]


  const logout= () =>{
    Auth.clearAll();
    window.location.reload();
    Actions.jump("home")
  }
  return (
    <ScrollView>
      <View>
        <ImageBackground
          style={{ height: 200 }}
          source={{ uri: img }}
        >
          <Text
            style={{ marginTop: 50, marginLeft: 100, fontSize: 30, color: "white" }} >
            Emploitik
            </Text>

        </ImageBackground>
        {
          menu.map((item) => (
            <ListItem
              onPress={() => Actions.jump(item.to)}
              key={item.id}
              leftAvatar={<Icon name={item.icon} color="#FF4500"></Icon>}
              title={item.title}
              bottomDivider
              chevron={{ color: '#FF4500' }}
            />
          ))
        }

<ListItem
              onPress={logout}
              key={0}
              leftAvatar={<Icon name="close" color="#FF4500"></Icon>}
              title="logout"
              bottomDivider
              chevron={{ color: '#FF4500' }}
            />
      </View>
    </ScrollView>
  )

}
export default sideMenu



