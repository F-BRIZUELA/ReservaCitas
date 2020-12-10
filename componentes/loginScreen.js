import React from 'react'
import { render } from 'react-dom';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import  firebase from 'firebase';

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null,
    }

    handleLogin = () => {
        const { email, password } = this.state

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({errorMessage : error.message}))
    }

    render(){
        return(
            <View style = { styles.container }>

                <View style = { styles.errorMessage }>
                    {this.state.errorMessage && <Text style={ styles.error }>{this.state.errorMessage}</Text>}
                </View>

                <View style = { styles.form }>
                    <Text style={ styles.inputTitle}> Email </Text>
                    <TextInput style = { styles.input } autoCapitalize = "none"
                    onChangeText={ email => this.setState ({ email })}
                    value = {this.state.email}
                    ></TextInput>
                </View>

                <View style = { styles.form }>
                    <Text style={ styles.inputTitle}> Contraseña </Text>
                    <TextInput style = { styles.input } autoCapitalize = "none"
                    onChangeText={ password => this.setState ({ password })}
                    value = {this.state.password}
                    ></TextInput>
                </View>

                <TouchableOpacity style = { styles.button} onPress = { this.handleLogin}
                onPress={() => this.props.navigation.navigate("mainScreen")}>
                    <Text style = {{ color: "#FFF", fontWeight: "250" }}> Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("registerScreen")}>
                    <Text> Todavia no tienes cuenta?, 
                    <Text style = {{ color: '#AD1517', fontWeight: 250}}> Registrate </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1481B5'
    },

    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
    },
    
    error: {
        color: "#e9446a",
        fontSize: 10,
        fontWeight: "300",
        textAlign: "center",
    },

    form: {
        color: '#AD1517',
        marginBottom: 48,
        marginHorizontal: 30,
    },

    inputTitle: {
        color: 'white',
        fontSize: 10,
        textTransform: "uppercase",
    },

    input: {
        borderBottomColor: '#AD1517',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "white",
    }, 

    button: {
        marginHorizontal: 30,
        backgroundColor: '#AD1517',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    }
})