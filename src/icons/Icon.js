import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// Load all of the icon set configuration files. (previously generated from IcoMoon)
import configEvaFill from './Eva_Fill.json';
import configEvaOutline from './Eva_Outline.json';

// Generate React Component sets based on all of the icon sets (Config and TTF) (previously generated from IcoMoon)
const sets = {
  fill: createIconSetFromIcoMoon(configEvaFill, 'Eva_Fill', 'Eva_Fill.ttf'),
  outline: createIconSetFromIcoMoon(configEvaOutline, 'Eva_Outline', 'Eva_Outline.ttf'),
};

// Function that adds a new property (setName) to each icon, it identify the "icon set" where the icon belongs to.
const mapSets = (setName) => (set) => ({ ...set, setName });

// List of all of the supported icons. Also it adds the "setName" property to each icon of the list.
export const iconList = [
  ...configEvaFill.icons.map(mapSets('fill')),
  ...configEvaOutline.icons.map(mapSets('outline')),
];

// It creates a new component of an specific Icon that should exist in any of the "icon sets"
const Icon = ({ name, withFallback, fallback, ...props }) => {
  // Look for the icon in the iconList
  const iconDefinition = iconList.find((icon) => {
    return icon.properties.name === name;
  });

  // return null if the given icon name is not found
  if (!iconDefinition) {
    const FallbackSet = sets[fallback.set];
    return withFallback ? <FallbackSet name={fallback.name} {...props} /> : null;
  }

  // Load the icon set (which is already a Component)
  const IconSet = sets[iconDefinition.setName];
  // Return the required Icon Component with the required props
  return <IconSet name={name} {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  withFallback: PropTypes.bool,
  fallback: PropTypes.shape({
    set: PropTypes.string,
    name: PropTypes.string,
  }),
};

Icon.defaultProps = {
  withFallback: false,
  fallback: {
    set: 'fill',
    name: 'minus-square',
  },
};

// Export the memoized Icon Component (now is a HOC, use findByType(Icon.type) when testing)
export default memo(Icon);
