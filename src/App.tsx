/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppMain from '@pages/root/AppMain';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <AppMain />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
