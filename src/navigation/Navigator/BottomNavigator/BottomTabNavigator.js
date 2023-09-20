import React, { useCallback } from 'react';

import homeStack from '@/modules/Home';
import profileStack from '@/modules/Profile';
import { useBarsManager } from '@/ui/components/BarsManager';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as screen from '@/navigation/screens';

import TabBar from '../../Components/TabBar';
import getUserTabs from './getUserTabs';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const { isTabBarShown } = useBarsManager();

  const tabBarItems = getUserTabs();

  const renderTabBar = useCallback(
    (props) => isTabBarShown && <TabBar tabBarItems={tabBarItems} {...props} />,
    [isTabBarShown, tabBarItems]
  );

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{ headerShown: false }}
      initialRouteName={screen.PRODUCTS_HOME_SCREEN}
    >
      <Tab.Screen name={screen.PROFILE_SCREEN_STACK} component={profileStack} />
      <Tab.Screen name={screen.HOME_SCREEN_STACK} component={homeStack} />
    </Tab.Navigator>
  );
};

BottomNavigator.defaultProps = {
  maintenanceModules: undefined,
};

BottomNavigator.propTypes = {};

export default BottomNavigator;
