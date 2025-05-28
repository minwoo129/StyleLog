/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppMain from '@pages/root/AppMain';
import {Provider} from 'jotai';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider>
          <AppMain />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
