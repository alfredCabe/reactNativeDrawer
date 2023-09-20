import { PROFILE_SCREEN } from '@/navigation/screens';
import * as React from 'react';
import { Button, View } from 'react-native';

const Profile = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate(PROFILE_SCREEN)} title="Go to Profile" />
    </View>
  );
};

export default Profile;
