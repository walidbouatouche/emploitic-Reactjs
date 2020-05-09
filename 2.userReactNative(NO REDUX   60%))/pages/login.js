import React, { useEffect, useState } from "react";
import Layout from '../layout'
import { TouchableOpacity, TextInput, View, StyleSheet, ScrollView, Text } from "react-native"
import Sendrequest from '../services/sendrequest'
import Auth from '../services/auth'
import { Actions } from 'react-native-router-flux';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const handlePassword = (text) => {
    setPassword(text)
  }
  const handleEmail = (text) => {
    setMail(text)
  }
  const login = () => {
    const _mail = mail;
    const _password = password;
    alert(_password);
    Sendrequest('/api/user/_data/', 'POST', JSON.stringify({ mail: _mail, password: _password })).then(res => {

      res.json().then((response) => {
        const { token, userId } = response
        //  we receive data from backend
        Auth.setToken(token);
        Auth.setUserId(userId);
        window.location.reload();

      })
    }).catch(e => {
      alert("somthing Worng")
    })
  }
  return (
    <ScrollView>
      <Layout>
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
  },
  submitButtonText: {
    color: 'white',

  }
})

export default Login