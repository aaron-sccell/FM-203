import { Button, Image, Texto } from "react-native";
import { View } from "react-native";

export const Saludo2 = () => {
    return (

        <View>
          <Image source={require('./assets/wave.png')} />  
        <Text> Soy un componente compuesto  </Text>
        <Button title="Hola 203"> </Button>
        </View>
    )
}