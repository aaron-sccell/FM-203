import { Button, Image, Text, View, StyleSheet, Alert } from 'react-native';

export const Saludo2 = () => {
  return (
    <View style={styles.tarjeta}>
      <Image source={require('../assets/wave.png')} style={styles.imagen} />
      <Text style={styles.texto}>Soy un componente compuesto</Text>
      <Button title="Hola desde Saludo2" onPress={() => Alert.alert('Saludo2', 'Componente funcionando')} />
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  imagen: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
