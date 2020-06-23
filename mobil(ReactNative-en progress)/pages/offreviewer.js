import React from "react";
import Layout from '../layout'
import { ScrollView, Text, Button } from "react-native"
import { useSelector, useDispatch } from 'react-redux'

import { _offreAction } from '../redux/_actions/offre.action'
import Auth from '../_helpers/auth'

// reload  for refresh data
import { Updates } from 'expo'
const Offreviewer = ({ offre }) => {

  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const postuler = () => {

    dispatch(_offreAction.postulerOffre(offre._id, Auth.getUserId()))
  }


  return (
    <ScrollView>
      <Layout>
        {state.offres.error && <Text style={{ color: 'red' }}>{state.offres.error}</Text>}
        {state.offres.succes &&
          (<Text >"Success!" </Text> && Updates.reload.call())
        }

        <Text style={{ fontSize: 15, color: 'orange' }} >
          {offre.titre}
        </Text>
        <Text >
          {offre.description}
        </Text>
      {
        // Auth.isAuth() check if user login
      }
        {Auth.isAuth() && <Button onPress={postuler} title={'Postuler'} ></Button>
        }
        {!Auth.isAuth() && <Text style={{ color: 'green' }}> Connectez Vous pour postuler </Text>
        }
      </Layout>
    </ScrollView>
  )


}


export default Offreviewer