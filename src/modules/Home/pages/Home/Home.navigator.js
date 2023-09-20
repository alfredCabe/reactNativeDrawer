import React from 'react';

import { HOME_SCREEN } from '@/navigation/screens';

import HomeScreen from './Home.screen';

const PerformanceNavigator = (Stack) => {
  return <Stack.Screen key={HOME_SCREEN} name={HOME_SCREEN} component={HomeScreen} />;
};

export default PerformanceNavigator;
