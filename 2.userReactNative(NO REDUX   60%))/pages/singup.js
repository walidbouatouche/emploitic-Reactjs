import React, { useState } from "react";
import Layout from '../layout'
import { TouchableOpacity, TextInput, View, StyleSheet, ScrollView, Text } from "react-native"
import Sendrequest from '../services/sendrequest'


const Singup = () => {

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
        Sendrequest('/api/user/data/', 'POST', JSON.stringify({ mail: _mail, password: _password })).then(res => {
            alert("singuo secssfully")

        }).catch(e => {
            alert("somthing Worng")
        })
    }
    return (
        <ScrollView>
            <Layout>
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
                        onPress={login}
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

export default Singup