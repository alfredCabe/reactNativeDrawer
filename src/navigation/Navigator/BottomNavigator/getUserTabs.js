import * as screens from '../../../navigation/screens';

const getScreens = () => {
  return [
    {
      label: 'home',
      key: screens.HOME_SCREEN_STACK,
      name: screens.HOME_SCREEN_STACK,
      iconName: 'activity-outline',
    },
    {
      label: 'perfil',
      key: screens.PROFILE_SCREEN_STACK,
      name: screens.PROFILE_SCREEN_STACK,
      iconName: 'person',
    },
  ];
};

const getUserTabs = () => {
  const items = getScreens();

  return items;
};

export default getUserTabs;
