import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from 'Elements'
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

const SubNavBase = styled.div`
  background-color: ${colors.primaryDark};

  display: none;

  position: absolute;
  top: 60px;
  left: 0;

  width: 100%;

  ${Container} {
    display: flex;
    justify-content: flex-end;
  }
`

const HasSubNav = styled.div`
  :hover {
    ${NavLink} {
      background-color: ${colors.primaryDark};
    }
    ${SubNavBase} {
      display: block;

      ${NavLink} {
        :hover {
          background-color: ${colors.light};
          color: ${colors.dark};
        }
      }
    }
  }
`

const SubNav = props => (
  <SubNavBase>
    <Container>{props.children}</Container>
  </SubNavBase>
)

export const HeaderNav = props => (
  <NavBase>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/news">News</NavLink>
    <NavLink to="/about">About</NavLink>
    <HasSubNav>
      <NavLink to="/advertise">Advertise</NavLink>
      <SubNav>
        <NavLink to="/advertise/events">Events</NavLink>
        <NavLink to="/advertise/classifieds">Classifieds</NavLink>
        <NavLink to="/advertise/banner-ads">Banner Ads</NavLink>
        <NavLink to="/advertise/press-releases">Press Releases</NavLink>
      </SubNav>
    </HasSubNav>

    <NavLink to="/newsletter">Newsletter</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavBase>
)
