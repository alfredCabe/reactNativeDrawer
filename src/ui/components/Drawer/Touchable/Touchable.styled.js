import styled, { css } from 'styled-components/native';

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  ${({ button }) =>
    button &&
    css`
      flex: 1;
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: 8px 10px;
    `}
`;

StyledTouchableOpacity.displayName = 'StyledTouchableOpacity';

export default StyledTouchableOpacity;
