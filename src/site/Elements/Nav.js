import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from 'Variables'

export const NavBase = styled.nav`
  display: flex;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${colors.light};
  padding: 18px;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${colors.primaryDark};
    color: ${colors.light};
  }
`

export const HeaderNav = props => (
  <NavBase>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/news">News</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/advertise">Advertise</NavLink>
    <NavLink to="/advertise2">Advertise 2</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavBase>
)
