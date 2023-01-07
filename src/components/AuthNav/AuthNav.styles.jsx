import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 16px 8px;
  color: teal;
  &.active {
    color: white;
    background-color: teal;
  }
`;
export const Header = styled.header`
  border-bottom: 1px solid teal;
`;
