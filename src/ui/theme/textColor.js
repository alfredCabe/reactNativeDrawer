import theme from 'styled-theming';

import colors from './colors';

export default theme('textColor', {
  base: colors.base,
  black: colors.black,
  darkGrey: colors.darkGrey,
  error: colors.error,
  inactive: colors.inactive,
  label: colors.label,
  midGrey: colors.midGrey,
  notification: colors.notification,
  success: colors.success,
  warning: colors.warning,
  white: colors.white,
  iphoneBlueText: colors.iphoneBlueText,
});
