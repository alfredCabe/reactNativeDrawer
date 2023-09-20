import { createRef } from 'react';

export const isReadyRef = createRef();

export const navigationRef = createRef();

export const navigate = (name, params) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
    return true;
  }
  // App was unmounted, nothing happened
  return false;
};
