import React from 'react'
import { render } from 'react-dom';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import  firebase from 'firebase';

export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null,
    }

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        })

        .catch(error => this.setState({errorMessage : error.message}))
    }

    render(){
        return(
            <View style = { styles.container }>

                <View style = { styles.errorMessage }>
                    {this.state.errorMessage && <Text style={ styles.error }>{this.state.errorMessage}</Text>}
                </View>

                <View style = { styles.form }>
                    <Text style={ styles.inputTitle}> Nombre Completo </Text>
                    <TextInput style = { styles.input } autoCapitalize = "none"
                    onChangeText={ name => this.setState ({ name })}
                    value = { this.state.name }
                    ></TextInput>
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

                <TouchableOpacity style = { styles.button} onPress = { this.handleSignUp}>
                    <Text style = {{ color: "#FFF", fontWeight: "500" }}> Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("loginScreen")}>
                    <Text> Ya tienes cuenta?, 
                    <Text style = {{ color: "#e9446a", fontWeight: 500}}> Inicia Sesion </Text>
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
        color: "red",
        fontSize: 10,
        fontWeight: "600",
        textAlign: "center",
    },

    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },

    inputTitle: {
        color: "white",
        fontSize: 10,
        textTransform: "uppercase",
    },

    input: {
        borderBottomColor: '#AD1517',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161f3d",
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