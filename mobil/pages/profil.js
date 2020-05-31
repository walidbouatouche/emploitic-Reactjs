import React, { useEffect, useState } from "react";
import Layout from '../layout'
import { ScrollView } from "react-native"
import Withauth from '../lib/withauth';
import sendRequest from '../services/sendrequest';
import Auth from '../services/auth';
import { ListItem } from 'react-native-elements';

//A page about user data

const Profil = (props) => {
  useEffect(() => {

  }, [])
  return (
    <ScrollView>
      <Layout>

      </Layout>
    </ScrollView>
  )

}

export default Withauth(Profil)