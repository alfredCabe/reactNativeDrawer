import styled, { css } from 'styled-components/native';
import { rgba } from 'polished';
import { rems } from '@/utils/Helpers/styles';
import { colors } from '@/ui/theme';

const TabBarWrapper = styled.View`
  flex-direction: row;
  background-color: ${colors.baseLightest};
  padding-top: ${rems(0.5)};
  padding-bottom: ${rems(0.5)};
`;

const TabBarItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

TabBarItem.displayName = 'TabBarItem';

const TabBarItemButton = styled.TouchableOpacity`
  align-items: center;
  padding: ${rems(0.313)};
  border-radius: ${rems(0.25)};
  ${({ isFocused }) =>
    isFocused &&
    css`
      background-color: ${rgba(colors.darkGrey, 0.2)};
    `}
`;

TabBarItemButton.displayName = 'TabBarItemButton';

export { TabBarWrapper, TabBarItem, TabBarItemButton };
