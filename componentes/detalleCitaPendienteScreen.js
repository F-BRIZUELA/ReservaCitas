import React, {useEffect, useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import { Button, View, Text, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity, Alert, _ScrollView } from 'react-native';
import firebase from '../db/firebase';
import {ListItem} from 'react-native-elements';
import 'bootstrap/dist/css/bootstrap.min.css';

const detalleCitaPendienteScreen = (props) => {

    const estadoInicial={
        nombre:"",
        apellido:"",
        num_cedula:"",
        num_celular:"",
        especialidad:"",
        fecha:"",
    }

    const [cita, setCita]= useState(estadoInicial);

    const getCitaById = async (id) =>{
        const dbRef = firebase.DB.collection('citas').doc(id)
        const doc = await dbRef.get();
        const cita = doc.data();
        setCita({...cita, Id: doc.id});
        setCargando(false);
    }

useEffect(() =>{
    getCitaById(props.route.params.citaId)
}, []);

const actualizarChangeText = (nombre, value) =>{
    setCita({...cita, [nombre]: value});
};

const confirmacionAlert = () => {
    Alert.alert('Elminar Reservación', '¿Estás seguro?',[
        {text: 'Eliminar', onPress: () => deleteCitaById()},
        {text: 'Cancelar', onPress: () => console.log(false)},
    ])
}

const deleteCitaById = async (id) =>{
    const dbRef = firebase.DB.collection('citas').doc(props.route.params.citaId);
    await dbRef.delete();
    props.navigation.navigate('listaCitaPendiente')
}

const updateCitaById = async (id) =>{
    const dbRef = firebase.DB.collection('citas').doc(cita.id);
    await dbRef.set({
        nombre: cita.nombre,
        apellido: cita.apellido,
        num_cedula: cita.num_cedula,
        num_celular: cita.num_celular,
        especialidad: cita.especialidad,
        fecha: cita.fecha,
    });
    setCita(estadoInicial)
    props.navigation.navigate('listaCitaPendiente')
}

const [cargando, setCargando] = useState(true)

if (cargando){
    return(
        <View style={styles.container}>
            <ActivityIndicator style = { styles.activityIndicator} 
            size="large"/>
        </View>
    )
}

return(
    <View style={styles.container}>
              
    <Text style = { styles.textLabel}> Nombre </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese su nombre"  
    placeholderTextColor="#F0EAD6"
    value={cita.nombre}
    onChangeText={(value) => actualizarChangeText("nombre", value)}
    ></TextInput>

    <Text style = { styles.textLabel}> Apellidos </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese sus apellidos" 
    placeholderTextColor="#F0EAD6"
    value={cita.apellido}
    onChangeText={(value) => actualizarChangeText("apellido", value)}
    ></TextInput>

    <Text style = { styles.textLabel}> Número de cédula </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese su número de cédula" 
    placeholderTextColor="#F0EAD6"
    value={cita.num_cedula}
    onChangeText={(value) => actualizarChangeText("num_cedula", value)}
    ></TextInput>
    
    <Text style = { styles.textLabel}> Número telefónico </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese su número celular" 
    placeholderTextColor="#F0EAD6"
    value={cita.num_celular}
    onChangeText={(value) => actualizarChangeText("num_celular", value)}
    ></TextInput>
   
    <Text style = { styles.textLabel}> Especialidad </Text>

    <Text style = { styles.textLabel}> Fecha </Text>
   
    <TouchableOpacity
     onPress={() => updateCitaById()}
    style={ styles.button }>     
    <Text style={ styles.textButton }> Actualizar </Text>
  </TouchableOpacity>

  <View>
  <TouchableOpacity
     onPress={() => confirmacionAlert()}
    style={ styles.button }>     
    <Text style={ styles.textButton }> Eliminar </Text>
  </TouchableOpacity>
  </View>
</View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1481B5',
    },  
    
    activityIndicator:{
        marginTop:'4%',
        color: '#AD1517', 
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


export default detalleCitaPendienteScreen;