import React, { useEffect, useState } from "react";
import Layout from '../layout'
import { TouchableOpacity, TextInput, View, StyleSheet, ScrollView, Text } from "react-native"
import { Actions } from 'react-native-router-flux';

import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../redux/_actions/user.action';
import Auth from '../_helpers/auth'
import { Updates } from 'expo'

const Login = () => {
     //https://ar.reactjs.org/docs/hooks-intro.html
  const [mail, setMail] = useState('');

  const [password, setPassword] = useState('');
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  const handlePassword = (text) => {
    setPassword(text)
  }
  const handleEmail = (text) => {
    setMail(text)
  }
  const login = () => {
    dispatch(_userAction.login({ mail, password }))
  }


  function makeAuth() {
    //  we receive data from backends
    const { token, userId } = state.user.userData

    /* 
    store user details and jwt token in local storage to 
    keep user logged in between page refreshes 

    */
    Auth.setToken(token);
    Auth.setUserId(userId);
    Updates.reload()
    //Actions.jump("home");

  }
  return (
    <ScrollView>
      <Layout>

        {state.user.error && <Text  style={{color:'red'}} > {state.user.error} </Text>}

        {
          // when we receive userData mean: successfully login
          // we will call funtion makeAuth
        }

        {state.user.userData && (makeAuth.call())}

        <View style={styles.container}>
          <Text>  login page</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#FF4500"
            autoCapitalize="none"
            onChangeText={handleEmail}
          />
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#FF4500"
            autoCapitalize="none"
            onChangeText={handlePassword}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={login}
          >
            <Text style={styles.submitButtonText}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => Actions.singup()}
          >
            <Text style={styles.submitButtonText}> singup </Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </ScrollView>
  )


}


const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#FF4500',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#FF4500',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 20
  },
  submitButtonText: {
    color: 'white',

  }
})

export default Login