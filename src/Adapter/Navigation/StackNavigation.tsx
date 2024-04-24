import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenParamList, Screens } from './screenTypes';
import Splah from '../../View/Screens/Splah';

const Stack = createNativeStackNavigator<ScreenParamList>();

export const StackNavigation = (): JSX.Element => {

    return (
        <Stack.Navigator initialRouteName={Screens.Splash} screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Stack.Screen name={Screens.Splash} component={Splah} />
        </Stack.Navigator>
    );
};
