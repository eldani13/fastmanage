// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
  },
  overlay: {
    flex: 1,
    justifyContent: 'center', // Centrar el contenido en el overlay
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con opacidad
    width: '100%',
  },
  title: {
    fontSize: 32,
    color: '#fff', // Color del texto
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%', // Ancho del campo de entrada
    color: '#fff', // Color del texto del input
  },
});

export default styles;
