import React from 'react';
import {NavigationContainers} from './Adapter/Navigation/NavigationContainers';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainers />
    </GestureHandlerRootView>
  );
}

export default App;
