import theme from 'styled-theming';
import { rems } from '@/utils/Helpers/styles';

export default theme('fontSize', {
  allcapsLarge: rems(0.875),
  allcapsMedium: rems(0.75),
  allcapsSmall: rems(0.625),

  h1: rems(2.375),
  h2: rems(1.875),
  h3: rems(1.5),
  h4: rems(1.25),
  h5: rems(1.125),

  label: rems(0.75),

  linkMedium: rems(0.875),
  linkSmall: rems(0.75),

  p: rems(0.875),

  subtitleMedium: rems(1),
  subtitleSmall: rems(0.875),

  textExtraLarge: rems(1.875),
  textLarge: rems(1.25),
  textMedium: rems(0.875),
  textSmall: rems(0.75),
});
