import styled from 'styled-components/native';

import Icon from '@/icons/Icon';
import { colors } from '@/ui/theme';

const DrawerItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  margin: 4px 10px;
`;

const DrawerItemContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
`;

DrawerItemContent.displayName = 'DrawerItemContent';

const DrawerItemText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: 'Montserrat-Bold';
`;

const DrawerItemLeftIcon = styled(Icon)`
  margin-right: 12px;
`;

DrawerItemLeftIcon.displayName = 'DrawerItemLeftIcon';

const DrawerItemRightIcon = styled(Icon)`
  margin-left: auto;
`;

DrawerItemRightIcon.displayName = 'DrawerItemRightIcon';

export {
  DrawerItemWrapper,
  DrawerItemContent,
  DrawerItemText,
  DrawerItemLeftIcon,
  DrawerItemRightIcon,
};
