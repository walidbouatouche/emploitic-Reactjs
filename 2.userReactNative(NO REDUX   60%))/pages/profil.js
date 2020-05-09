import React, { useEffect, useState } from "react";
import Layout from '../layout'
import { ScrollView } from "react-native"
import Withauth from '../lib/withauth';
import Sendrequest from '../services/sendrequest';
import Auth from '../services/auth';
import { ListItem } from 'react-native-elements';

const Profil = (props) => {
  const [myoffres, setMyoffres] = useState([{}]);
  useEffect(() => {
    Sendrequest(`/api/user/data/${Auth.getUserId()}`, 'GET', false).then(res => {
      res.json().then((response) => {
        console.log(response);
        setMyoffres(response);
      })
    }).catch(e => {
      alert("something Wrong");
    })

  }, [])
  return (
    <ScrollView>
      <Layout>
        { //  just  a simple page
        }
        {
          myoffres.map((item) => (
            <ListItem
              key={item.mail}
              title={item.nom}
              subtitle={item.prenom}
              bottomDivider
            />
          ))
        }
      </Layout>
    </ScrollView>
  )

}

export default Withauth(Profil)