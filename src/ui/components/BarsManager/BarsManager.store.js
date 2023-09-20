export const initialState = {
  isAppBarShown: true,
  isTabBarShown: true,
};

export const types = {
  SHOW_APP_BAR: 'SHOW_APP_BAR',
  HIDE_APP_BAR: 'HIDE_APP_BAR',
  SHOW_TAB_BAR: 'SHOW_TAB_BAR',
  HIDE_TAB_BAR: 'HIDE_TAB_BAR',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SHOW_APP_BAR:
      return {
        ...state,
        isAppBarShown: true,
      };
    case types.HIDE_APP_BAR:
      return {
        ...state,
        isAppBarShown: false,
      };
    case types.SHOW_TAB_BAR:
      return {
        ...state,
        isTabBarShown: true,
      };
    case types.HIDE_TAB_BAR:
      return {
        ...state,
        isTabBarShown: false,
      };
    default:
      return {
        ...state,
      };
  }
};

// Actions -------------------------------
export const showTabBar =
  ({ dispatch }) =>
  () => {
    dispatch({ type: types.SHOW_TAB_BAR });
  };

export const hideTabBar =
  ({ dispatch }) =>
  () => {
    dispatch({ type: types.HIDE_TAB_BAR });
  };

export const buildActions = (store) => ({
  showTabBar: showTabBar(store),
  hideTabBar: hideTabBar(store),
});
