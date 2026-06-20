import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './safeAreaScreen';

export default function MenuScreen() {
  const [activeScreen, setActiveScreen] = useState('menu');

  switch (activeScreen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'safeArea':
      return <SafeAreaScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <button title="Practica Tarjetas" onPress={() => setScreen('tarjetas')} />
          <button title="Practica Safe Area" onPress={() => setScreen('safeArea')} />
          <button title="Volver al Menú" onPress={() => setScreen('menu')} />
          <View />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});