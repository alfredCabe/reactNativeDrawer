import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import TabBarIcon from './TabBarIcon';
import { TabBarWrapper, TabBarItem, TabBarItemButton } from './TabBar.styled';

export const getPaddingBottom = (insets) =>
  Math.max(insets.bottom - Platform.select({ ios: 4, default: 0 }), 0);

const TabBar = ({ state, navigation, tabBarItems, descriptors }) => {
  const defaultInsets = useSafeAreaInsets();
  const paddingBottom = getPaddingBottom(defaultInsets);
  const focusedRouteName = state.routeNames[state.index];

  const onPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };
  const onLongPress = (route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <TabBarWrapper paddingBottom={paddingBottom}>
      {tabBarItems.map((item) => {
        let badgeCondition;
        const { key, name, iconName } = item;
        const isFocused = focusedRouteName === name;

        // Match item's route whith state.routes
        const route = state.routes.find((ele) => ele.name === name);

        if (route) {
          const { options } = descriptors[route.key];
          badgeCondition = options.badgeCondition;
        }

        const Icon = TabBarIcon(badgeCondition);

        return (
          <TabBarItem key={key}>
            <TabBarItemButton
              accessibilityLabel={iconName}
              accessibilityRole="button"
              onPress={() => onPress(route, isFocused)}
              isFocused={isFocused}
              onLongPress={() => onLongPress(route)}
            >
              <Icon name={iconName} />
            </TabBarItemButton>
          </TabBarItem>
        );
      })}
    </TabBarWrapper>
  );
};

TabBar.propTypes = {
  state: PropTypes.shape({
    index: PropTypes.number,
    routeNames: PropTypes.arrayOf(PropTypes.string),
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    emit: PropTypes.func,
  }).isRequired,
  tabBarItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  descriptors: PropTypes.shape({}).isRequired,
};

export default TabBar;
