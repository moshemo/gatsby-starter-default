import React from 'react'

import { NavLink } from 'Elements'

export const SignedIn = props => (
  <>
    <NavLink to="/news">New</NavLink>
    <NavLink to="/ads">Log Out</NavLink>
    <NavLink circle to="/signup">
      <span>MM</span>
    </NavLink>
  </>
)

export const SignedOut = props => (
  <>
    <NavLink to="/signup">Sign Up</NavLink>
    <NavLink to="/signin">Log In</NavLink>
  </>
)
