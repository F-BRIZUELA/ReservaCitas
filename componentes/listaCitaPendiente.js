import React, {useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, _ScrollView } from 'react-native';
import firebase from '../db/firebase'
import {ListItem} from 'react-native-elements'

const listaCitaPendiente = () =>{
    const [citas, setCitas]= useState([]);

    useEffect (() => {
        firebase.DB.collection('citas').onSnapshot(querySnapshot =>{
            const citas = [];
            querySnapshot.docs.forEach(docs => {
                const {nombre, apellido, num_cedula, num_celular, especialidad, fecha} = docs.data()
                citas.push({
                    id: docs.id,
                    nombre,
                    apellido,
                    num_cedula,
                    num_celular,
                    especialidad,
                    fecha
                })
            });
            setCitas(citas)  
        });
    }, []);

return(
   <ScrollView>
       {citas.map((citas) =>{
           return(
            <ListItem key={citas.id} bottomDivider onPress={() =>{props.navigation.navigate('detalleCitaPendienteScreen', {
                citaId: citas.id
            }
            )}}>
            <ListItem.Chevron/>
            <ListItem.Content>
            <ListItem.Title>{citas.especialidad}</ListItem.Title>
            <ListItem.Subtitle>{citas.fecha}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
           );
       })};
   </ScrollView>
   );
}

export default listaCitaPendiente;