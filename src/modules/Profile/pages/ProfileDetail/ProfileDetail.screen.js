import { HOME_SCREEN } from '@/navigation/screens';
import * as React from 'react';
import { Button, View } from 'react-native';

const Notifications = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate(HOME_SCREEN)} title="Go to home" />
    </View>
  );
};

export default Notifications;
