import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import DrawerItem from '@/ui/components/Drawer/DrawerItem';

import { colors } from '@/ui/theme';
import useNavigationWithParents from '@/utils/hooks/useNavigationWithParents';

import Touchable from '../Touchable';
import {
  DrawerContent,
  DrawerItemList,
  DrawerSafeArea,
  DrawerScrollView,
  DrawerScrollViewOnSubList,
  RightPanel,
  RightPanelHeader,
  RightPanelHeaderIcon,
  RightPanelHeaderText,
  RightPanelTitle,
  DrawerFooter,
  Section,
} from './Drawer.styled';

const Drawer = ({ drawerItems, navigation }) => {
  const isFirstRun = useRef(true);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);
  const [displayRightPanel, setDisplayRightPanel] = useState(false);

  const slideProgress = useRef(new Animated.Value(0)).current;
  const panelX = slideProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [drawerWidth, 0],
  });
  const submenuItems = drawerItems[itemSelected]?.screens || [];

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const toValue = displayRightPanel ? 1 : 0;
    Animated.timing(slideProgress, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [displayRightPanel, slideProgress]);

  const handleOnPress = (item) => () => {
    console.log('entro aqui', item.parentName);
    if (item.parentName) {
      useNavigationWithParents(navigation.navigate, {
        screen: item.parentName,
        params: { screen: item.routeName, params: item.params },
      });
    } else {
      useNavigationWithParents(navigation.navigate, item.routeName, item.params);
    }

    setDisplayRightPanel(false);
  };

  return (
    <DrawerSafeArea
      forceInset={{ top: 'always', horizontal: 'never' }}
      onLayout={(event) => {
        setDrawerWidth(event.nativeEvent.layout.width);
      }}
    >
      <DrawerScrollView>
        <DrawerContent>
          <DrawerItemList>
            {drawerItems.map((item, index) => (
              <DrawerItem
                key={item.id}
                content={item.title}
                leftIcon={item.icon}
                rightIcon="arrow-ios-forward-outline"
                onPress={() => {
                  setItemSelected(index);
                  setDisplayRightPanel(true);
                }}
              />
            ))}
          </DrawerItemList>
        </DrawerContent>
        <DrawerFooter>
          <Section topBorder>
            <DrawerItem content="Cerrar sesión" leftIcon="power-outline" onPress={() => null} />
          </Section>
        </DrawerFooter>
      </DrawerScrollView>

      {drawerItems[itemSelected] && (
        <RightPanel style={{ transform: [{ translateX: panelX }] }}>
          <RightPanelHeader>
            <Touchable
              label="Atras"
              onPress={() => {
                setDisplayRightPanel(!displayRightPanel);
              }}
            >
              <RightPanelHeaderIcon color={colors.darkGrey} size={24} name="arrow-back" />
              <RightPanelHeaderText>Atras</RightPanelHeaderText>
            </Touchable>

            <RightPanelTitle>
              <RightPanelHeaderIcon
                size={24}
                color={colors.darkGrey}
                name={drawerItems[itemSelected].icon}
              />
              <RightPanelHeaderText>{drawerItems[itemSelected].title}</RightPanelHeaderText>
            </RightPanelTitle>
          </RightPanelHeader>

          <DrawerScrollViewOnSubList>
            {submenuItems.map((item) => (
              <DrawerItem
                key={item.id}
                content={item.title}
                leftIcon={item.icon}
                onPress={handleOnPress(item)}
              />
            ))}
          </DrawerScrollViewOnSubList>
        </RightPanel>
      )}
    </DrawerSafeArea>
  );
};

const itemShape = {
  icon: PropTypes.node,
  id: PropTypes.number,
  routeName: PropTypes.string,
  title: PropTypes.string,
};

itemShape.screens = PropTypes.arrayOf(PropTypes.shape(itemShape));

Drawer.propTypes = {
  drawerItems: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
};

export default Drawer;
