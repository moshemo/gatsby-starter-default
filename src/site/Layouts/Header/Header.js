import React from 'react'
import styled from 'styled-components'
import { Container, End, Start, Logo, HeaderNav as Nav } from 'Elements'
import { colors } from 'Variables'

const HeaderBase = styled.header`
  grid-area: header;

  background-color: ${colors.primaryDarker};
  color: ${colors.light};
  font-size: 16px;
  font-weight: 500;
  padding: 0 64px;
  text-transform: uppercase;
`

const HeaderInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Header = props => (
  <HeaderBase>
    <HeaderInner>
      <Start>
        <Logo />
      </Start>

      <End>
        <Nav />
      </End>
    </HeaderInner>
  </HeaderBase>
)
