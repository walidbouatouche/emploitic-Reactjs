import React, { useState } from "react";
import { TouchableOpacity, TextInput, View, StyleSheet, ScrollView, Text } from "react-native"

import Layout from '../layout'

import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../redux/_actions/user.action';

const Singup = () => {
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
    const singup = () => {
        dispatch(_userAction.signup({ mail, password }))

    }
    return (
        <ScrollView>
            <Layout>

                {state.user.error && <Text style={{ color: 'red' }} > {state.user.error} </Text>}

                {
                 /*
                 We use  &&(and) very popular  for react devlopper
                  when the first true it will show the second
                  
                  */
                 }
                {state.user.succes && <Text > singup Success!</Text>}

                <View style={styles.container}>
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
                        onPress={singup}
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

export default Singup