import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RootNavigator from './src/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
