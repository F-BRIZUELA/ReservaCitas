import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView } from "react-native-gesture-handler";
import {ListItem} from 'react-native-elements';
import firebase from '../db/firebase';

const listaCitaPendiente = (props) =>{
    const [citas, setCitas]= useState([]);

    useEffect (() => {
        firebase.DB.collection('citas').onSnapshot((querySnapshot) =>{
            const citas = [];
            querySnapshot.docs.forEach((doc) => {
                const {nombre, apellido, num_cedula, num_celular,  especialidad, fecha} = doc.data();
                citas.push({
                    id: doc.id,
                    nombre,
                    apellido,
                    num_cedula,
                    num_celular,
                    especialidad,
                    fecha
                });
            });
            console.log(citas)
            setCitas(citas)  
        });
    }, []);

return(
   <ScrollView style={styles.container}>
       {citas.map((cita) =>{
           return(
            <ListItem key={cita.id} 
            bottomDivider 
            onPress={() =>{
                props.navigation.navigate("detalleCitaPendienteScreen", {
                  citaId: cita.id
            });
        }}
    >
            <ListItem.Chevron style={styles.container}/>
            <ListItem.Content>
            <ListItem.Title>{cita.nombre + cita.apellido}</ListItem.Title>
            <ListItem.Subtitle>{cita.fecha}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
           );
       })}
    </ScrollView>
   );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1481B5',
    },
});

export default listaCitaPendiente;