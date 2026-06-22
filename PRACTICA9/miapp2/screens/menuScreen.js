import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './safeAreaScreen';
import PressableSwitchScreen from './PressableSwitchScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import FlatListSectionListScreen from './FlatListSectionListScreen';
import ImageBackgroundSplashScreen from './ImageBackgroundSplashScreen';
import ActivityKeyboardScreen from './ActivityKeyboardScreen';
import ModalBottomSheetScreen from './ModalBottomSheetScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'safeArea':
      return <SafeAreaScreen />;

    case 'pressableSwitch':
  return <PressableSwitchScreen />;

  case 'textInputAlert':
    return <TextInputAlertScreen />;

  case 'flatListSectionList':
    return <FlatListSectionListScreen />;

  case 'imageBackgroundSplash':
    return <ImageBackgroundSplashScreen />;

  case 'activityKeyboard':
    return <ActivityKeyboardScreen />;

  case 'modalBottomSheet':
    return <ModalBottomSheetScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>

          <text>Menu Screen</text>
          <Button
            title="Practica: Tarjetas"
            onPress={() => setScreen('tarjetas')}
          />

          <Button
            title="Practica: Safe Area"
            onPress={() => setScreen('safeArea')}
          />

          <Button
          title="Practica: Pressable & Switch"
          onPress={() => setScreen('pressableSwitch')}
          />

          <Button
          title="Practica: TextInput & Alert"
          onPress={() => setScreen('textInputAlert')}
          />

          <Button
          title="Practica: FlatList & SectionList"
          onPress={() => setScreen('flatListSectionList')}
          />

          <Button
          title="Practica: ImageBackground & SplashScreen"
          onPress={() => setScreen('imageBackgroundSplash')}
          />

          <Button
          title="Practica: ActivityIndicator & KeyboardAvoidingView"
          onPress={() => setScreen('activityKeyboard')}
          />

          <Button
          title="Practica: Modal & Bottom Sheet"
          onPress={() => setScreen('modalBottomSheet')}
          />

          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6846ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});