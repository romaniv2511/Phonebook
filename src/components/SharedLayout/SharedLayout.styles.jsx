import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 16px 0;
  &.active {
    color: red;
  }
`;
