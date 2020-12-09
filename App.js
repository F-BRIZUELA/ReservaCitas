import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import mainScreen from './componentes/mainScreen'
import reservaCitaScreen from './componentes/reservaCitaScreen'
import listaCitaPendiente from './componentes/listaCitaPendiente'
import detalleCitaPendienteScreen from './componentes/detalleCitaPendienteScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="reservaCitaScreen" component={reservaCitaScreen} />
        <Stack.Screen name="listaCitaPendiente" component={listaCitaPendiente} />
        <Stack.Screen name="detalleCitaPendienteScreen" component={detalleCitaPendienteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1481B5',
    },
  
    logo:{
      width: 120,
      height: 120,
      marginTop:'7%',
      alignSelf:'center',
    },
  
    eslogan:{
      color: 'white',
      textAlign:'center',
      marginTop: '7%',
      marginHorizontal:'4%',
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
     
    titulo:{
      marginTop:'4%',
      marginBottom:'3%',
      alignSelf:'center',
      color: 'white',
      fontSize: 19,
      fontWeight: 'bold',
    },   
    
    textLabel:{
      marginTop:'4%',
      marginBottom:'1%',
      color: 'white',
      fontSize: 17,
      marginVertical: '4%',
      fontWeight: 'bold',
      marginHorizontal:'4%',
    },   
  
    textButton:{
      color: 'white',
      fontSize: 18,
      marginTop:'4%',
      textAlign:'center',
      fontWeight: 'bold',
    },  

    textButtonMain:{
      color: 'white',
      fontSize: 18,
      marginTop:'4%',
      textAlign:'center',
      fontWeight: 'bold',
    },
  
    input:{
      marginHorizontal:'4%',
      marginBottom: 5,
      height: '7%',
      borderWidth: 2,
      borderColor: '#AD1517',
      borderRadius: 5,
      paddingHorizontal: 3,
      fontSize: 15,
    },
  
    button: {
      textAlign:'center',
      marginTop: '10%',
      backgroundColor: '#AD1517',
      marginHorizontal:'30%',
      borderRadius: 5,
      height: '6%',
    }, 

    buttonMain: {
      textAlign:'center',
      marginTop: '10%',
      backgroundColor: '#AD1517',
      marginHorizontal:'12%',
      borderRadius: 5,
      height: '8%',
    },
});
