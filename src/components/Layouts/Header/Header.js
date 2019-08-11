import React from 'react'

import { HeaderBase, HeaderInner } from './HeaderStyles'

import { End, Start, NavBase } from 'Elements'
import { SignedIn, SignedOut } from './HeaderLinks'

export const Header = props => (
  <HeaderBase>
    <HeaderInner>
      <Start>
        <h4>Startup Reporter</h4>
      </Start>

      <End>
        <NavBase>
          <SignedOut />
          <SignedIn />
        </NavBase>
      </End>
    </HeaderInner>
  </HeaderBase>
)
