import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const mainScreen = (props) => {
    return (
        <View style={styles.container}> 
             <Text style={styles.eslogan}> Farmacia La Cubana </Text>
             <Text style={styles.eslogan}> Comprometidos con la salud y la economía </Text>
    
            <TouchableOpacity
             onPress={() => props.navigation.navigate('reservaCitaScreen')}
              style={ styles.buttonMain }>
              <Text style={ styles.textButtonMain }> Reservar cita </Text>
            </TouchableOpacity>   
            
            <TouchableOpacity
            onPress={() => props.navigation.navigate('listaCitaPendiente')}
              style={ styles.buttonMain }>
              <Text style={ styles.textButtonMain }> Citas pendientes </Text>
            </TouchableOpacity>
 
            </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1481B5',
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
    
    textLabel:{
      marginTop:'4%',
      marginBottom:'1%',
      color: 'white',
      fontSize: 17,
      marginVertical: '4%',
      fontWeight: 'bold',
      marginHorizontal:'4%',
    },   

    textButtonMain:{
      color: 'white',
      fontSize: 18,
      marginTop:'4%',
      textAlign:'center',
      fontWeight: 'bold',
    },

    buttonMain: {
      textAlign:'center',
      marginTop: '16%',
      backgroundColor: '#AD1517',
      marginHorizontal:'12%',
      borderRadius: 5,
      height: '8%',
    },
});

export default mainScreen;