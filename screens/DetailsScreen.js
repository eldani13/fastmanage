// DetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import Card from '../components/Card';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Card title="Card Title" content="This is the content of the card." />
    </View>
  );
};

export default DetailScreen;
