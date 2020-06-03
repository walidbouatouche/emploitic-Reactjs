import React, { useEffect } from "react";

import Layout from '../layout'
import { ScrollView, Text, Dimensions } from "react-native"

import { useDispatch, useSelector } from 'react-redux'
import { _offreAction } from '../redux/_actions/offre.action'
import { ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

const List = ({ id }) => {

  const dispatch = useDispatch();
  const state = useSelector(state => state)


  useEffect(() => {
    /*
       * Get an ID from the home page
       * Get offres by categories
    */
    dispatch(_offreAction.getOffreByCat(id))

  }, [])

  const jumpTo = (offre) => {
    // for show the details of offre we will send object offre 
    Actions.jump("offreviewer", { offre });
  }


  return (
    <ScrollView>
      <Layout>
        {
          state.offres.listoffres && state.offres.listoffres.map((item) => (
            <ListItem
              style={{
                borderStyle: "solid",
                borderLeftColor: "#FF4500",
                borderLeftWidth: 5,
                marginTop: 10

              }}
              onPress={() => jumpTo(item)}
              key={item.id}
              leftAvatar={{ source: { uri: item.imguri } }}
              title={
                <Layout>

                  <Text style={{ width: 200, marginLeft: 20 }}>{item.titre}</Text>
                  <Text style={{ fontSize: 10, width: 200, marginLeft: 20 }}>{item.description.substring(0, 30) + '...'}</Text>

                </Layout>
              }


              bottomDivider
              chevron={
                <Text style={
                  {
                    marginLeft: 100,
                    width: 80,
                    backgroundColor: '#FF4500',
                    color: "white",
                    padding: 2,
                    borderRadius: 20

                  }

                }>{item.date_d}</Text>
              }

            />
          ))
        }
      </Layout>
    </ScrollView>
  )


}

export default List;