import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native"

import Layout from '../layout'

import Auth from '../_helpers/auth';
import WithAuth from '../lib/withauth'

//A page about user data

const Profil = (props) => {
  useEffect(() => {

  }, [])
  return (
    <ScrollView>
      <Layout>
        <Text style={{fontSize:20,padding:11}}> change Your CV file</Text>
      </Layout>
    </ScrollView>
  )

}

export default WithAuth(Profil)