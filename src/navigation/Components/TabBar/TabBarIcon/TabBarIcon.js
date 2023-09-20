import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from '@/icons/Icon';
import Badge from '@/ui/components/Badge';
import { colors } from '@/ui/theme';

const TabBarIcon = ({ name, hasBadge }) => {
  if (hasBadge) {
    return (
      <Badge dot number={0}>
        <Icon color={colors.white} size={24} name={name} />
      </Badge>
    );
  }
  return <Icon color={colors.white} size={24} name={name} />;
};

TabBarIcon.defaultProps = {
  hasBadge: false,
};

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  hasBadge: PropTypes.bool,
};

export default (badgeCondition) => {
  if (badgeCondition) {
    const mapStateToProps = (state) => ({ hasBadge: badgeCondition(state) });
    return connect(mapStateToProps)(TabBarIcon);
  }
  return TabBarIcon;
};
