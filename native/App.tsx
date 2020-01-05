import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { View } from 'native-base';
import { Platform, StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

/* eslint-disable global-require, @typescript-eslint/camelcase */
async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // Add more assets
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      ...FontAwesome.font,
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
  ]);
}
/* eslint-enable global-require, @typescript-eslint/camelcase */

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingError = error => console.warn(error);
  const handleFinishLoading = () => setLoadingComplete(true);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}