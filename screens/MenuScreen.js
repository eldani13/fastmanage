// MenuScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import FavoriteItem from '../components/FavoriteItem';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Título */}
        <Text style={styles.title}>Menu</Text>

        {/* Fondo rojo y Tipos de Productos en Círculo */}
        <View style={styles.redBackground}>
          <ScrollView 
            horizontal 
            contentContainerStyle={styles.productTypes}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.circleContainer}>
              <TouchableOpacity style={[styles.circleButton, styles.circle1]}>
                <Image source={require('../assets/pizza.png')} style={styles.circleImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circleButton, styles.circle2]}>
                <Image source={require('../assets/pizza.png')} style={styles.circleImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circleButton, styles.circle3]}>
                <Image source={require('../assets/pizza.png')} style={styles.circleImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circleButton, styles.circle4]}>
                <Image source={require('../assets/pizza.png')} style={styles.circleImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circleButton, styles.circle5]}>
                <Image source={require('../assets/pizza.png')} style={styles.circleImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circleButton, styles.circle6]}>
                <Image source={require('../assets/pizza.png')} style={styles.circleImage} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Espaciador entre secciones */}
        <View style={styles.sectionSpacer} />

        {/* Sección de Favoritos */}
        <Text style={styles.subtitle}>Favoritos</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.favoritesContainer}
        >
          <FavoriteItem imageSource={require('../assets/comida1.png')} title="Seafood Jumbo" price="40k" />
          <FavoriteItem imageSource={require('../assets/comida2.png')} title="Meat Lover Pizza" price="38k" />
          <FavoriteItem imageSource={require('../assets/comida1.png')} title="Veggie Delight" price="36k" />
          <FavoriteItem imageSource={require('../assets/comida2.png')} title="Pepperoni" price="32k" />
        </ScrollView>

      </ScrollView>

      {/* Menú Inferior */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Text style={styles.menuItem}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    color: '#FF4500',
    textAlign: 'left',
    marginTop: 24,
    marginLeft: 16,
  },
  redBackground: {
    backgroundColor: '#8B0000',
    borderTopLeftRadius: 200,
    borderBottomLeftRadius: 200,
    height: 400,
    width: 300,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
  },
  productTypes: {
    alignItems: 'center',
    paddingRight: 100, // Deja espacio en el lado derecho para que los elementos sobresalgan
  },
  circleContainer: {
    width: 400,
    height: 400,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#222',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  // Posiciones de los productos en forma de círculo
  circle1: {
    top: 20,
    left: 180,
  },
  circle2: {
    top: 120,
    left: 260,
  },
  circle3: {
    top: 240,
    left: 200,
  },
  circle4: {
    top: 260,
    left: 80,
  },
  circle5: {
    top: 140,
    left: 20,
  },
  circle6: {
    top: 40,
    left: 100,
  },
  sectionSpacer: {
    height: 350, // Espacio para separar Favoritos de los productos
  },
  subtitle: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'left',
    marginVertical: 16,
    marginLeft: 15,
  },
  favoritesContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#222',
  },
  menuItem: {
    fontSize: 24,
    color: '#FF4500',
  },
});
