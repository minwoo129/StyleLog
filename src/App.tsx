/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ContextProvider from '@contexts';
import {AppStateContextProvider} from '@contexts/common/AppStateContext';
import AppMain from '@pages/root/AppMain';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {Provider} from 'jotai';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider>
          <IconRegistry icons={EvaIconsPack} />
          <ContextProvider contexts={[AppStateContextProvider]}>
            <ApplicationProvider {...eva} theme={eva.light}>
              <AppMain />
            </ApplicationProvider>
          </ContextProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
