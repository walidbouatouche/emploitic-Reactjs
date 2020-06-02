import React from "react";
import Layout from '../layout'
import { ScrollView, Text, Button } from "react-native"



const Offreviewer = ({ offre }) => {

  return (
    <ScrollView>
      <Layout>
        <Text style={{ fontSize: 15, color: 'orange' }} >
          {offre.titre}
        </Text>
        <Text >
          {offre.description}
        </Text>

        <Button title={'Postuler'} ></Button>
      </Layout>
    </ScrollView>
  )


}


export default Offreviewer