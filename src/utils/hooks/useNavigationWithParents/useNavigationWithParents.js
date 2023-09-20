const navigateWithParams = (navigate, screenParams, params = {}) =>
  navigate('Root', {
    screen: 'main',
    params:
      typeof screenParams === 'string'
        ? {
            screen: screenParams,
            params,
          }
        : screenParams,
  });

export default navigateWithParams;
