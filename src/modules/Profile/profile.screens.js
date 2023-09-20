import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { PROFILE_MY_PROFILE_SCREEN } from '@/navigation/screens';
import MyProfileNavigator from './pages/Profile/Profile.navigator';
import MyProfileDetailNavigator from './pages/ProfileDetail/ProfileDetail.navigator';

const ProfileStack = createStackNavigator();

const Profile = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName={PROFILE_MY_PROFILE_SCREEN}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {MyProfileNavigator(ProfileStack)}
      {MyProfileDetailNavigator(ProfileStack)}
    </ProfileStack.Navigator>
  );
};

export default Profile;
