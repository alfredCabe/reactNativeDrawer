import theme from 'styled-theming';
import { rems } from '@/utils/Helpers/styles';

export default theme('borderWidth', {
  none: rems(0.0),
  fine: rems(0.1),
  medium: rems(0.375),
});
