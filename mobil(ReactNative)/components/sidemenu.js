import React from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'
import { img } from '../images/imageside'
import { ListItem, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import Auth from '../_helpers/auth';
import { Updates } from 'expo'

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

  const logout = () => {
    Auth.clearAll();
    Updates.reload()
    Actions.jump("home")
  }
  return (
    <ScrollView>
      <View>
        <ImageBackground
          style={{ height: 150 }}
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
              leftAvatar={<Icon style={{ marginRight: 20 }} name={item.icon} color="#FF4500"></Icon>}
              title={item.title}

              bottomDivider

            />
          ))
        }

        {Auth.isAuth() && <ListItem
          onPress={logout}
          key={0}
          leftAvatar={<Icon style={{ marginRight: 20 }} type="font-awesome" name="power-off" color="#FF4500"></Icon>}
          title="logout"
          bottomDivider

        />}
      </View>


    </ScrollView>
  )

}
export default sideMenu



