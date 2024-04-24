import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigation } from './StackNavigation';

export const NavigationContainers = (): JSX.Element => {
    return (
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
    );
};
