

import logo from './assets/splash.png'

return (
    <View style={styles.container}>
     <Image source = { logo } style={ styles.logo }/>
     <Text style={styles.eslogan}> Farmacia La Cubana </Text>
     <Text style={styles.eslogan}> Comprometidos con la salud y la economía </Text>
      
        <Text style = { styles.textLabel}> Usuario </Text>
        <TextInput style = { styles.input} placeholder = "Ingrese su nombre de usuario"  placeholderTextColor="#F0EAD6"></TextInput>

        <Text style = { styles.textLabel}> Contraseña </Text>
        <TextInput style = { styles.input} placeholder = "Ingrese la contraseña" placeholderTextColor="#F0EAD6"></TextInput>

        <TouchableOpacity
       onPress={() => navigation.navigate('main')}
        style={ styles.button }>
          
        <Text style={ styles.textButton }> Entrar </Text>
      </TouchableOpacity>
    </View>
  );    