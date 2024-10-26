// Card.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const Card = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
};

export default Card;
