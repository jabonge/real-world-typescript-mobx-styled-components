import React from 'react';
import styled from 'styled-components';
import { brandColor } from '../styles/variable';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.div`
  height: 55px;
  background-color: white;
  position: fixed;
  box-sizing: border-box;
  padding-left: 25rem;
  padding-right: 25rem;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${brandColor};
`;

const NavItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkComp = styled(NavLink)`
  color: #aaa;
  &:hover {
    color: #555;
  }

  /* &.active {
    background: #fff !important;
    border-bottom: 2px solid ${brandColor} !important;
    color: ${brandColor} !important;
  } */
  list-style: none;
  text-decoration: none;
  margin-right: 15px;
`;
function Header() {
  return (
    <HeaderContainer>
      <Brand>couduit</Brand>
      <NavItemContainer>
        <LinkComp to="/" activeStyle={{ color: 'black' }} exact={true}>
          Home
        </LinkComp>
        <LinkComp to="/login" activeStyle={{ color: 'black' }}>
          Sign In
        </LinkComp>
        <LinkComp to="/register" activeStyle={{ color: 'black' }}>
          Sign Up
        </LinkComp>
      </NavItemContainer>
    </HeaderContainer>
  );
}

export default Header;
