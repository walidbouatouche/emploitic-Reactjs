import React from 'react'
import { Header } from 'react-native-elements'

const _Header = () => {
     return (
          <Header
               backgroundColor="#FF4500"
               leftComponent={{ icon: 'menu', color: '#fff' }}
               centerComponent={{ text: 'EMPLIOTIK', style: { color: '#fff' } }}
          />)
}


export default _Header
