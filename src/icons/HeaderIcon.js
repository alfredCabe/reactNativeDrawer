import styled from 'styled-components/native';
import { rems } from '@/utils/Helpers/styles';
import Icon from './Icon';

const HeaderIcon = styled(Icon)`
  margin-left: ${rems(1)};
  margin-right: ${rems(1)};
  font-size: ${rems(1.5)};
`;

export default HeaderIcon;
