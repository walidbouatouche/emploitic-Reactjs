import React, { useEffect, useState } from "react";
import Layout from '../layout'
import { ScrollView } from "react-native"


const List = (props) => {
  const [offres, setOffres] = useState([{}]);
  useEffect(() => {
    //Get an ID from the home page


   

  }, [])
  return (
    <ScrollView>
      <Layout>
      
      </Layout>
    </ScrollView>
  )


}

export default List;