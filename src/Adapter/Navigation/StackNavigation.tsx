import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenParamList, Screens} from './screenTypes';
import Splash from '../../View/Screens/Splash';
import Home from '../../View/Screens/Home';
import {useInterceptor} from '../Axios/useInterceptor';

const Stack = createNativeStackNavigator<ScreenParamList>();

export const StackNavigation = (): JSX.Element => {
  useInterceptor();
  return (
    <Stack.Navigator
      initialRouteName={Screens.Splash}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={Screens.Splash} component={Splash} />
      <Stack.Screen name={Screens.Home} component={Home} />
    </Stack.Navigator>
  );
};
