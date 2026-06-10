/* Zona1 : importaciones de componenetes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';


/*MAIN : Donde estan en uso los componentes */
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wave.png')}></Image>
      {/* <Image/> ---> autocierre */}
      <Text>Hola mundo React Native</Text>
      <Saludo></Saludo>
      <StatusBar style="auto" />
    </View>
  );
}


/* Zona3  : Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});