import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert, _ScrollView } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import firebase from "../db/firebase";

const detalleCitaPendienteScreen = (props) => {

    const estadoInicial={
        id: "",
        nombre:"",
        apellido:"",
        num_cedula:"",
        num_celular:"",
        especialidad:"",
        fecha:"",
    }

    const [cita, setCita]= useState(estadoInicial);

    const getCitaById = async (id) => {
        const dbRef = firebase.DB.collection("citas").doc(id)
        const doc = await dbRef.get();
        const cita = doc.data();
        setCita({...cita, id: doc.id});
        setCargando(false);
    };

useEffect(() => {
    getCitaById(props.route.params.citaId)
}, []);

const actualizarChangeText = (value, prop) =>{
    setCita({...cita, [prop]: value});
};

const confirmacionAlert = () => {
    Alert.alert('Elminar Reservación', '¿Estás seguro?',[
        {text: 'Eliminar', onPress: () => deleteCitaById()},
        {text: 'Cancelar', onPress: () => console.log("Cancelado")},
    ],
    {
        cancelable: true,
    }
  );
};

const deleteCitaById = async () => {
    setCargando(true);
    const dbRef = firebase.DB.collection("citas").doc(props.route.params.citaId);
    await dbRef.delete();
    setCargando(false);
    props.navigation.navigate("listaCitaPendiente");
}

const updateCitaById = async () => {
    const citaRef = firebase.DB.collection("citas").doc(cita.id);
    await citaRef.set({
        nombre: cita.nombre,
        apellido: cita.apellido,
        num_cedula: cita.num_cedula,
        num_celular: cita.num_celular,
        especialidad: cita.especialidad,
        fecha: cita.fecha,
    });
    setCita(estadoInicial)
    props.navigation.navigate("listaCitaPendiente");
};

const [cargando, setCargando] = useState(true);

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
    onChangeText={(value) => actualizarChangeText(value, "nombre")}
    ></TextInput>

    <Text style = { styles.textLabel}> Apellidos </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese sus apellidos" 
    placeholderTextColor="#F0EAD6"
    value={cita.apellido}
    onChangeText={(value) => actualizarChangeText(value, "apellido")}
    ></TextInput>

    <Text style = { styles.textLabel}> Número de cédula </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese su número de cédula" 
    placeholderTextColor="#F0EAD6"
    value={cita.num_cedula}
    onChangeText={(value) => actualizarChangeText(value, "num_cedula")}
    ></TextInput>
    
    <Text style = { styles.textLabel}> Número celular </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese su número celular" 
    placeholderTextColor="#F0EAD6"
    value={cita.num_celular}
    onChangeText={(value) => actualizarChangeText(value, "num_celular")}
    ></TextInput>
    
    <Text style = { styles.textLabel}> Especialidad </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese la especialidad" 
    placeholderTextColor="#F0EAD6"
    value={cita.especialidad}
    onChangeText={(value) => actualizarChangeText(value, "especialidad")}
    ></TextInput> 
    
    <Text style = { styles.textLabel}> Fecha </Text>
    <TextInput style = { styles.input} 
    placeholder = "Ingrese la fecha de la cita" 
    placeholderTextColor="#F0EAD6"
    value={cita.fecha}
    onChangeText={(value) => actualizarChangeText(value, "fecha")}
    ></TextInput>
   
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