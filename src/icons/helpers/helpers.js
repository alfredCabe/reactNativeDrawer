/* eslint-disable import/prefer-default-export */
import { kebabCase } from 'lodash';

export const getIconName = ({ iconFile }) => {
  const iconPath = iconFile.split('/').reverse();
  const prefix = iconFile.includes('custom') ? 'bn-' : '';
  const suffix = iconFile.includes('custom') ? `-${iconPath[1]}` : '';
  return `${prefix}${kebabCase(iconPath[0])}${suffix}`;
};
