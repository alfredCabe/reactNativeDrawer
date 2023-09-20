import React from 'react';

import { PROFILE_MY_PROFILE_SCREEN } from '@/navigation/screens';

import ProfileScreen from './Profile.screen';

const PerformanceNavigator = (Stack) => {
  return (
    <Stack.Screen
      key={PROFILE_MY_PROFILE_SCREEN}
      name={PROFILE_MY_PROFILE_SCREEN}
      component={ProfileScreen}
    />
  );
};

export default PerformanceNavigator;
