import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '@/ui/theme';

import { navigationRef, isReadyRef } from './RootNavigation';

import DrawerNavigator from './Navigator/DrawerNavigation';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.base};
`;

const RootStack = createStackNavigator();

const Navigation = () => {
  const theme = {
    colors: {
      background: 'transparent',
    },
  };

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <StyledSafeAreaView>
      <NavigationContainer
        theme={theme}
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor={colors.base} />
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="Root">{() => <DrawerNavigator />}</RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    </StyledSafeAreaView>
  );
};

export default Navigation;
