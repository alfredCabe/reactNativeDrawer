import React, { useCallback } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import drawerStyles from '@/ui/common/Drawer';

import useUserDrawerItems from './getTemporalScreens';
import Drawer from '../../Components/Drawer';
import BottomNavigator from '../BottomNavigator';

const PrimaryDrawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const items = useUserDrawerItems();

  const renderDrawer = useCallback((props) => <Drawer {...props} drawerItems={items} />, [items]);

  const BottomNavigatorCall = useCallback((props) => <BottomNavigator {...props} />, []);

  return (
    <PrimaryDrawer.Navigator
      drawerContent={renderDrawer}
      screenOptions={{ ...drawerStyles, drawerType: 'front' }}
    >
      <PrimaryDrawer.Screen key="main" name="main" component={BottomNavigatorCall} />
    </PrimaryDrawer.Navigator>
  );
};

DrawerNavigator.defaultProps = {};

DrawerNavigator.propTypes = {};

export default DrawerNavigator;
