import React from 'react'
import { Button } from 'Elements'
import {
  SignupBase,
  SignupTitle,
  SignupSubtitle,
  SignupInput,
} from './SignupStyles'

export const Signup = () => (
  <SignupBase>
    <SignupTitle>The Latest News</SignupTitle>
    <SignupSubtitle>Signup for Our Newsletter & Stay Up to Date</SignupSubtitle>
    <SignupInput
      type="email"
      name="signup"
      placeholder="Enter your email address"
    />
    <Button bg="primaryDark">Signup Today</Button>
  </SignupBase>
)
