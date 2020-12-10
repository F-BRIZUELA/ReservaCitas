import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginScreen from './componentes/loginScreen'
import registerScreen from './componentes/registerScreen'
import mainScreen from './componentes/mainScreen'
import reservaCitaScreen from './componentes/reservaCitaScreen'
import listaCitaPendiente from './componentes/listaCitaPendiente'
import detalleCitaPendienteScreen from './componentes/detalleCitaPendienteScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1481B5',
        }, 
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf:"center",
        },
      }}
      >
       <Stack.Screen name="loginScreen" component={loginScreen}/>
        <Stack.Screen name="registerScreen" component={registerScreen}/>
        <Stack.Screen name="mainScreen" component={mainScreen}/>
        <Stack.Screen name="reservaCitaScreen" component={reservaCitaScreen}/>
        <Stack.Screen name="listaCitaPendiente" component={listaCitaPendiente} />
        <Stack.Screen name="detalleCitaPendienteScreen" component={detalleCitaPendienteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}