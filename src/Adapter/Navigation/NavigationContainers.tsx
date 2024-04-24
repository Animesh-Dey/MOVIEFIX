import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigation} from './StackNavigation';
import {Provider} from 'react-redux';
import {store} from '../Redux/Store/Store';

export const NavigationContainers = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};
