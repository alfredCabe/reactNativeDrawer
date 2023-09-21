import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@/ui/theme';
import Touchable from '../Touchable';
import {
  DrawerItemWrapper,
  DrawerItemContent,
  DrawerItemText,
  DrawerItemLeftIcon,
  DrawerItemRightIcon,
} from './DrawerItem.styled';

export const DrawerItemContainer = ({ label, children, padding, onPress }) => {
  const isTouchable = !!onPress;

  if (isTouchable) {
    return (
      <Touchable label={label} onPress={onPress} padding={padding} button>
        {children}
      </Touchable>
    );
  }

  return children;
};

DrawerItemContainer.defaultProps = {
  onPress: null,
  label: 'unknownLabel',
};

DrawerItemContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  padding: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
  label: PropTypes.string,
};

const DrawerItem = ({ content, label, leftIcon, rightIcon, onPress }) => {
  const isStringContent = typeof content === 'string';

  let labelText = label;
  if (!labelText && isStringContent) {
    labelText = content;
  }

  return (
    <DrawerItemWrapper>
      <DrawerItemContainer label={labelText} padding={isStringContent} onPress={onPress}>
        {leftIcon && <DrawerItemLeftIcon color={colors.darkGrey} size={22} name={leftIcon} />}

        {isStringContent ? (
          <DrawerItemText numberOfLines={1}>{content}</DrawerItemText>
        ) : (
          <DrawerItemContent>{content}</DrawerItemContent>
        )}

        {rightIcon && <DrawerItemRightIcon color={colors.darkGrey} size={22} name={rightIcon} />}
      </DrawerItemContainer>
    </DrawerItemWrapper>
  );
};

DrawerItem.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  onPress: null,
  label: null,
};

DrawerItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string,
};

export default DrawerItem;
