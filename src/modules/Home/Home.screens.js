import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { HOME_SCREEN } from '@/navigation/screens';
import HomeNavigator from './pages/Home/Home.navigator';

const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {HomeNavigator(HomeStack)}
    </HomeStack.Navigator>
  );
};

export default Home;
