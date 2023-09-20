import React from 'react';

import { PROFILE_MY_PROFILE_SCREEN_DETAIL } from '@/navigation/screens';

import ProfileDetailScreen from './ProfileDetail.screen';

const NotificationNavigator = (Stack) => {
  return (
    <Stack.Screen
      key={PROFILE_MY_PROFILE_SCREEN_DETAIL}
      name={PROFILE_MY_PROFILE_SCREEN_DETAIL}
      component={ProfileDetailScreen}
    />
  );
};

export default NotificationNavigator;
