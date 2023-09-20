import { PROFILE_SCREEN } from '@/navigation/screens';
import * as React from 'react';
import { Button, View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome home</Text>
      <Button onPress={() => navigation.navigate(PROFILE_SCREEN)} title="" />
    </View>
  );
};

export default Home;
