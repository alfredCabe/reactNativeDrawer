import React from 'react';
import PropTypes from 'prop-types';

import StyledTouchableOpacity from './Touchable.styled';

const Touchable = ({ label, children, onPress, disabled, button, padding }) => {
  return (
    <StyledTouchableOpacity
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      button={button}
      padding={padding}
      disabled={disabled}
    >
      {children}
    </StyledTouchableOpacity>
  );
};

Touchable.defaultProps = {
  disabled: false,
  padding: false,
  button: false,
  label: 'unknownLabel',
};

Touchable.propTypes = {
  disabled: PropTypes.bool,
  padding: PropTypes.bool,
  button: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};

export default Touchable;
