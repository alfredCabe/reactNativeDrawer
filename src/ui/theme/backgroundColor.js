import theme from 'styled-theming';

import colors from './colors';

export default theme('backgroundColor', {
  backgroundGrey_2: colors.backgroundGrey_2,
  backgroundGrey: colors.backgroundGrey,
  base: colors.base,
  baseLight: colors.baseLight,
  error: colors.error,
  inactive: colors.inactive,
  info: colors.baseLightest,
  label: colors.label,
  labelLight: colors.backgroundGrey_2,
  notification: colors.notification,
  notificationLight: colors.notificationLight,
  success: colors.success,
  transparent: colors.transparent,
  warning: colors.warning,
  white: colors.white,
});
