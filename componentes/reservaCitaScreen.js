import React, {useState} from "react";
import {View, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import firebase from '../db/firebase'

const reservaCitaScreen = (props) => {

  const estadoInicial={
    nombre:"",
    apellido:"",
    num_cedula:"",
    num_celular:"",
    especialidad:"",
    fecha:"",
}

const [state, setState]= useState(estadoInicial);


    const actualizarChangeText = (value, nombre) =>{
        setState({...state, [nombre]: value});
    };

    const registrarNuevaCita = async () =>{
        if (state.nombre === ""){
            alert('Todos los campos son requeridos');
        }else{
         try{
            await firebase.DB.collection('citas').add({
              nombre: state.nombre,
              apellido: state.apellido,
              num_cedula: state.num_cedula,
              num_celular: state.num_celular,
              especialidad: state.especialidad,
              fecha: state.fecha,
          });
          props.navigation.navigate('listaCitaPendiente')
          }catch(error){
            console.log(error)
        }
      }   
    };
    
    return (
      <ScrollView>
            <View style={styles.container}>  
              <Text style={styles.titulo}> Reservación de cita médica</Text>
              <View/> 
              
              <View style={styles.container}></View>       
              <Text style = { styles.textLabel}> Nombre </Text>
              <TextInput style = { styles.input} 
              placeholder = "Ingrese su nombre"  
              placeholderTextColor="#F0EAD6"
              onChangeText={(value) => actualizarChangeText("nombre", value)}
              ></TextInput>
              </View>

            <View style={styles.container}>
              <Text style = { styles.textLabel}> Apellidos </Text>
              <TextInput style = { styles.input} 
              placeholder = "Ingrese sus apellidos" 
              placeholderTextColor="#F0EAD6"
              onChangeText={(value) => actualizarChangeText("apellido", value)}
              ></TextInput>
              </View>

            <View style={styles.container}>
              <Text style = { styles.textLabel}> Número de cédula </Text>
              <TextInput style = { styles.input} 
              placeholder = "Ingrese su número de cédula" 
              placeholderTextColor="#F0EAD6"
              onChangeText={(value) => actualizarChangeText("num_cedula", value)}
              ></TextInput>
              </View>

             <View style={styles.container}>
              <Text style = { styles.textLabel}> Número telefónico </Text>
              <TextInput style = { styles.input} 
              placeholder = "Ingrese su número celular" 
              placeholderTextColor="#F0EAD6"
              onChangeText={(value) => actualizarChangeText("num_celular", value)}
              ></TextInput>
             </View>
             
             <View style={styles.container}>
              <TouchableOpacity
               onPress={() => registrarNuevaCita()}
              style={ styles.button }>
              <Text style={ styles.textButton }> Registrar </Text>
            </TouchableOpacity>
          </View>      
      </ScrollView>
          );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1481B5',
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
});

export default reservaCitaScreen;