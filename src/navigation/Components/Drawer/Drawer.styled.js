import { rgba } from 'polished';
import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

import Icon from '@/icons/Icon';
import { colors } from '@/ui/theme';
import { rems } from '@/utils/Helpers/styles';

const UserCode = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  padding: 12px 20px;
  font-family: 'Lato-Regular';
  font-weight: 500;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${rgba(colors.darkGrey, 0.2)};
  background-color: ${rgba(colors.darkGrey, 0.3)};
`;

const DrawerButton = styled.TouchableOpacity`
  width: 138px;
  flex-direction: row;
  align-items: center;
  height: 38px;
  margin: 4px 10px;
  padding-left: 20px;
  border-radius: 19px;
  background-color: ${colors.white};
`;

DrawerButton.displayName = 'DrawerButton';

const DrawerButtonLabel = styled.Text`
  font-size: 14px;
  color: ${colors.base};
  font-family: 'Montserrat-Medium';
`;

const DrawerButtonIcon = styled.View`
  width: 34px;
  height: 34px;
  padding: 5px;
  margin-left: auto;
  margin-right: 3px;
  border-radius: 34px;
  background-color: ${rgba(colors.base, 0.15)};
`;

const DrawerSafeArea = styled.SafeAreaView`
  flex: 1;
  position: relative;
  overflow: hidden;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

DrawerSafeArea.displayName = 'DrawerSafeArea';

const DrawerScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}))``;

const DrawerScrollViewOnSubList = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}))``;

const DrawerHeader = styled.View`
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${rgba(colors.darkGrey, 0.2)};
  border-bottom-width: 1px;
  border-bottom-color: ${rgba(colors.darkGrey, 0.2)};
`;

DrawerHeader.displayName = 'DrawerHeader';

const DrawerContent = styled.View`
  flex: 1;
`;

const DrawerItemList = styled.View`
  padding-top: 12px;
  padding-bottom: 12px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${rgba(colors.darkGrey, 0.2)};
`;

DrawerItemList.displayName = 'DrawerItemList';

const DrawerFooter = styled.View``;

DrawerFooter.displayName = 'DrawerFooter';

const Section = styled.View`
  padding-top: 12px;
  padding-bottom: 12px;
  ${({ topBorder }) =>
    topBorder &&
    css`
      border-style: solid;
      border-top-width: 1px;
      border-top-color: ${rgba(colors.darkGrey, 0.2)};
    `}
`;

const RightPanel = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: ${colors.base};
`;

RightPanel.displayName = 'RightPanel';

const RightPanelHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 16px 10px;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${rgba(colors.darkGrey, 0.2)};
  border-bottom-width: 1px;
  border-bottom-color: ${rgba(colors.darkGrey, 0.2)};
`;

const RightPanelHeaderText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: 'Montserrat-Medium';
`;

const RightPanelHeaderIcon = styled(Icon)`
  margin-right: 8px;
`;

const RightPanelTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TouchableLabel = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: 'Montserrat-Medium';
`;

const TouchableIcon = styled(Icon)`
  margin-left: ${({ marginLeft }) => (marginLeft && `${marginLeft}px`) || '0px'};
  margin-right: ${({ marginRight }) => (marginRight && `${marginRight}px`) || '0px'};
`;

export const AppInfo = styled.Text`
  margin-top: ${rems(0.3)};
  font-family: 'Montserrat-Regular';
  color: ${colors.white};
  font-size: ${rems(0.8)};
`;

export {
  DrawerButton,
  DrawerButtonIcon,
  DrawerButtonLabel,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerItemList,
  DrawerSafeArea,
  DrawerScrollView,
  DrawerScrollViewOnSubList,
  RightPanel,
  RightPanelHeader,
  RightPanelHeaderIcon,
  RightPanelHeaderText,
  RightPanelTitle,
  Section,
  TouchableIcon,
  TouchableLabel,
  UserCode,
};
