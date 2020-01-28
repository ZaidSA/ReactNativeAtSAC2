import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import LoadingComponent from './LoadingComponent'

export default class LoginComponent extends Component {
    constructor() {
        super()
        this.state = {isLoading: false, email: 'jm1@example.com', password: 'jay@123' }
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.loginTitle}> Login </Text>
            </View>
            <LoadingComponent isLoading={this.state.isLoading}></LoadingComponent>
            <View style={styles.middleView}>
                <TextInput
                    keyboardType='email-address'
                    placeholder='Email'
                    style={[styles.commonInput, styles.emailInput]}
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                ></TextInput>
                <TextInput
                    placeholder='Password'
                    style={styles.commonInput}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                ></TextInput>

                <TouchableOpacity style={styles.loginButtonContainer} onPress={this.onLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomView}>

            </View>


        </View>
    }

    onLogin = () => {
        // console.log('====================================');
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log('====================================');

        this.setState({isLoading: true})
        //Note:- Provide valid URL
        fetch('http://35.160.197.175:3006/api/v1/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'email': this.state.email,
                    'password': this.state.password
                })
            }).then((response) => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    
                }

                this.setState({isLoading: false})
            }).then((responseJSON) => {
                console.log(responseJSON);
                Alert.alert('Success', 'Logged in', [
                    {
                        text: 'Yes',
                        style: 'cancel'
                    },
                    {
                        text: 'Yes',
                        style: 'destructive'
                    },
                ])

                this.setState({isLoading: false})
            }).catch((error) => {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
                this.setState({isLoading: false})
            })
    }
}

const styles = StyleSheet.create({
    loginButtonContainer: {
        top: 20,
        backgroundColor: 'black',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    loginButtonText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    commonInput: {
        width: '80%',
        // backgroundColor: 'red',
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        padding: 10
    },
    emailInput: {
        bottom: 10
    },
    passwordInput: {

    },
    loginTitle: {
        fontSize: 30,
        fontWeight: '500'
    },
    container: {
        flex: 1
    },
    topView: {
        flex: 0.2,
        // backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleView: {
        flex: 0.4,
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flex: 0.4,
        // backgroundColor: 'yellow'
    }
})