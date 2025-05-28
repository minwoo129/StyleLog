/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ContextProvider from '@contexts';
import {AppStateContextProvider} from '@contexts/common/AppStateContext';
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
          <ContextProvider contexts={[AppStateContextProvider]}>
            <AppMain />
          </ContextProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
