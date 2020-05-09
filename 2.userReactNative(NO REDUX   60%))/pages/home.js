import React from "react";
import Layout from '../layout'
import { ScrollView } from "react-native"
import lists from '../static/cat.json'
import { ListItem } from 'react-native-elements'
import { Actions, ActionConst  } from 'react-native-router-flux';

const Home = () => {
  const jumpTo = (id) => {
    Actions.jump('list',{id})
    
  
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
                title={item.title}
                subtitle={item.title}
                bottomDivider
          
              />
            ))
          }
      </Layout>
    </ScrollView>
  )
}

export default Home