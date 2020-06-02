import React from "react";
import Layout from '../layout'
import { ScrollView, Text } from "react-native"
import lists from '../static/cat.json'
import { ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

//The first page that the user sees

const Home = () => {
  const jumpTo = (id) => {
    Actions.jump("list", { id });
  }
  return (
    <ScrollView>
      <Layout>
        {
          lists.map((item) => (
            <ListItem
              onPress={() => jumpTo(item.id)}
              key={item.id}
              leftAvatar={{ source: { uri: item.imguri } }}
              title={<Text style={{ marginLeft: 20 }}>{item.title}</Text>}
              bottomDivider

            />
          ))
        }
      </Layout>
    </ScrollView>
  )
}

export default Home