import styled from 'styled-components/native';

import { rems } from '@/utils/Helpers/styles';
import colors from '../../theme/colors';

const BadgeContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const BadgeWrapper = styled.View`
  position: absolute;
  top: ${({ top }) => rems(top)};
  right: ${({ right }) => rems(right)};
  height: ${rems(1)};
  min-width: ${rems(1)};
  border-top-left-radius: ${rems(0.5)};
  border-top-right-radius: ${rems(0.5)};
  border-bottom-left-radius: ${rems(0.5)};
  border-bottom-right-radius: ${rems(0.5)};
  padding: 0 ${rems(0.313)};
  border: 1px solid white;
  background-color: ${({ backgroundColor }) => colors[backgroundColor]};
`;

const DotWrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  height: ${rems(0.5)};
  min-width: ${rems(0.5)};
  border-top-left-radius: ${rems(0.25)};
  border-top-right-radius: ${rems(0.25)};
  border-bottom-left-radius: ${rems(0.25)};
  border-bottom-right-radius: ${rems(0.25)};
  padding: 0;
  border: 1px solid white;
  background-color: ${({ dotColor }) => (dotColor ? colors[dotColor] : colors.base)};
`;

const BadgeText = styled.Text`
  color: white;
  font-size: ${rems(0.625)};
`;
export { BadgeWrapper, BadgeContainer, BadgeText, DotWrapper };
