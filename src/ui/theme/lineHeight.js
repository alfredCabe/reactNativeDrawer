import theme from 'styled-theming';
import { rems } from '@/utils/Helpers/styles';

export default theme('lineHeight', {
  allcapsLarge: rems(1.0625),
  allcapsMedium: rems(0.875),
  allcapsSmall: rems(0.75),

  h1: rems(2.875),
  h2: rems(2.3125),
  h3: rems(1.8125),
  h4: rems(1.5),
  h5: rems(1.375),

  label: rems(0.875),

  linkMedium: rems(1.0625),
  linkSmall: rems(0.875),

  p: rems(1.625),

  subtitleMedium: rems(1.25),
  subtitleSmall: rems(1.0625),

  textExtraLarge: rems(2.3125),
  textLarge: rems(1.5),
  textMedium: rems(1.0625),
  textSmall: rems(0.875),
});
