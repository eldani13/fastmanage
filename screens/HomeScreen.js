// HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Menu'); // Cambia a 'Menu' después de 3 segundos
    }, 3000); // Cambia el tiempo según tu preferencia

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/home.png')} // Cambia por la ruta de tu imagen
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>FastManage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 36,
    color: 'white',
    position: 'absolute',
    top: '50%',
    textAlign: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5, // Ajusta la opacidad según sea necesario
  },
});

export default HomeScreen;
