import { useMemo } from 'react';

import filterMenuItems from '@/utils/Helpers/navigation';
import * as screen from '../../screens';

const getScreens = () => {
  return [
    {
      id: 1,
      title: 'Perfil',
      icon: 'person',
      permissions: [],
      screens: [
        {
          key: 'profile',
          id: 1,
          title: 'perfil de usuario',
          routeName: screen.PROFILE_MY_PROFILE_SCREEN,
          parentName: screen.PROFILE_SCREEN_STACK,
          icon: 'alert-triangle',
          permissions: [],
        },
      ],
    },
    {
      id: 2,
      title: 'Home',
      icon: 'alert-triangle',
      permissions: [],
      screens: [
        {
          key: 'home-key',
          id: 1,
          title: 'Ir al home',
          routeName: screen.HOME_SCREEN,
          parentName: screen.HOME_SCREEN_STACK,
          icon: 'alert-triangle',
          permissions: [],
        },
      ],
    },
  ];
};

const GetDrawerItems = () => {
  const screens = getScreens();
  return filterMenuItems(screens, []);
};

export default GetDrawerItems;
