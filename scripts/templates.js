/* istanbul ignore file reason: script template */
const { startCase, camelCase } = require('lodash');

const PascalCase = (str) => startCase(camelCase(str)).replace(/ /g, '');

const tplComponentIndex = (componentName) => `
import ${PascalCase(componentName)} from './${PascalCase(componentName)}';

export default ${PascalCase(componentName)};
`;

const tplComponent = (componentName) => `
import React from 'react';
import PropTypes from 'prop-types';

// TODO: Import styled components
// import {  } from './${PascalCase(componentName)}.styled';

const ${PascalCase(componentName)} = ({ ...props }) => {
  return (
    <>
      {/* TODO: Content */}
    </>
  );
};

${PascalCase(componentName)}.defaultProps = {
  // TODO: Default Props Values
};

${PascalCase(componentName)}.propTypes = {
  // TODO: Props Definition
};

export default ${PascalCase(componentName)};
`;

const tplComponentStyled = () => `
import styled, { css } from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';
import { colors } from '@/ui/theme';
`;

const tplComponentTest = (componentName) => `
import React from 'react';
import 'jest-styled-components/native';

import ${PascalCase(componentName)} from './${PascalCase(componentName)}';

describe('${PascalCase(componentName)}', () => {
  it('should render the ${PascalCase(componentName)} Component correctly', () => {
    const wrapper = shallow(<${PascalCase(componentName)} />);

    expect(wrapper).toMatchSnapshot();
  });
});
`;

module.exports = {
  PascalCase,
  tplComponentIndex,
  tplComponent,
  tplComponentStyled,
  tplComponentTest,
};
