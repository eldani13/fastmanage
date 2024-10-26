// FavoriteItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FavoriteItem = ({ imageSource, title, price }) => {
  return (
    <View style={localStyles.container}>
      <Image source={imageSource} style={localStyles.image} />

      {/* Contenedor de detalles */}
      <View style={localStyles.detailsContainer}>
        <View style={localStyles.overlay}>
          <Text style={localStyles.title}>{title}</Text>
        </View>
        <View style={localStyles.footer}>
          <Text style={localStyles.price}>{price}</Text>
          <TouchableOpacity style={localStyles.addButton}>
            <Text style={localStyles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FavoriteItem;

const localStyles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    backgroundColor: '#333',
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%', // La imagen ocupa todo el contenedor
    resizeMode: 'cover',
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    padding: 8,
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  price: {
    color: '#FF4500', // Color naranja para el precio
    fontSize: 14,
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF4500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
