import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import KeyboardManager from 'react-native-keyboard-manager';
import { enableScreens } from 'react-native-screens';

import Navigation from './navigation';
import BarsManager from './ui/components/BarsManager';
import { store } from './store/store';

//---------------------------------------------------------------------------------------
// Providers
//---------------------------------------------------------------------------------------
const Providers = ({ children }) => (
  <Provider store={store}>
    <BarsManager>{children}</BarsManager>
  </Provider>
);

Providers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

//---------------------------------------------------------------------------------------
// Main Component
//---------------------------------------------------------------------------------------
const Main = () => {
  if (Platform.OS === 'ios') {
    KeyboardManager.setKeyboardDistanceFromTextField(25);
    KeyboardManager.setEnableAutoToolbar(false);
  }
  enableScreens(true);
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
};

export default Main;
