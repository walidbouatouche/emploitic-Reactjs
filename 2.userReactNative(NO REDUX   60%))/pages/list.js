import React, { useEffect, useState } from "react";
import Layout from '../layout'
import { ScrollView } from "react-native"
import Sendrequest from '../services/sendrequest';
import { ListItem } from 'react-native-elements';

const List = (props) => {
  const [offres, setOffres] = useState([{}]);
  useEffect(() => {

    Sendrequest(`/api/offre/_data/${props.id}`, 'GET', false).then(res => {
      res.json().then((response) => {
        console.log(response);
        setOffres(response)

      })
    }).catch(e => {
      alert("something Wrong");

    })

  }, [])
  return (
    <ScrollView>
      <Layout>
        {
          offres.map((item) => (
            <ListItem
              key={item.id}
              leftAvatar={{ source: { uri: item.imguri } }}
              title={item.titre}
              subtitle={item.date_d}
              bottomDivider
            />
          ))
        }
      </Layout>
    </ScrollView>
  )


}

export default List;