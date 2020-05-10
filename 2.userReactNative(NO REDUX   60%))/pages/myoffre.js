import React, { useEffect, useState } from "react";
import Layout from '../layout'
import { ScrollView } from "react-native"
import Withauth from '../lib/withauth';
import Sendrequest from '../services/sendrequest';
import Auth from '../services/auth';
import { ListItem } from 'react-native-elements';

//A page showing the offers you have requested
//صفحة تظهر العروض التي طلبتها
//The code is clear and simple
// الكود واضح وبسيط

const Myoffre = (props) => {
  const [myoffres, setMyoffres] = useState([{}]);
  useEffect(() => {
    Sendrequest(`/api/offre/getmyoffres/${Auth.getUserId()}`, 'GET', false).then(res => {
      res.json().then((response) => {
        setMyoffres(response)

      })
    }).catch(e => {
      alert("something Wrong");

    })

  }, [])
  return (
    <ScrollView>
      <Layout>
        {
          myoffres.map((item) => (
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


export default Withauth(Myoffre)