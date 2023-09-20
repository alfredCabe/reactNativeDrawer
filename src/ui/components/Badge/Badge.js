import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { BadgeWrapper, BadgeContainer, BadgeText, DotWrapper } from './Badge.styled';

const Badge = ({ children, dot, dotColor, inactive, maxNumber, number, showZero, top, right }) => {
  const theme = {
    backgroundColor: inactive ? 'inactive' : 'notification',
  };

  return (
    <ThemeProvider theme={theme}>
      <BadgeContainer>
        {children}
        {dot ? (
          <DotWrapper dotColor={dotColor} />
        ) : (
          (number > 0 || showZero) && (
            <BadgeWrapper top={top} right={right} backgroundColor={theme.backgroundColor}>
              <BadgeText>{number >= maxNumber ? `${maxNumber - 1}+` : number}</BadgeText>
            </BadgeWrapper>
          )
        )}
      </BadgeContainer>
    </ThemeProvider>
  );
};

Badge.defaultProps = {
  dot: false,
  dotColor: undefined,
  inactive: false,
  maxNumber: 10,
  number: 0,
  showZero: false,
  top: -0.375,
  right: -0.625,
};

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  dot: PropTypes.bool,
  dotColor: PropTypes.string,
  inactive: PropTypes.bool,
  maxNumber: PropTypes.number,
  number: PropTypes.number,
  showZero: PropTypes.bool,
  top: PropTypes.number,
  right: PropTypes.number,
};

export default Badge;
