import React from 'react'
import styled from 'styled-components'

import { InputCss } from './base/InputCss'
import { Label } from './Label'

export const InputBase = styled.input.attrs(props => ({ type: 'text' }))`
  ${InputCss};
`

const InputIcon = styled.i``
const Message = styled.span``

export const Input = props => {
  const { label, message, horizontal, iconRight, iconLeft } = props
  return (
    <>
      <Label>{label}</Label>
      <InputBase {...props} />
      {iconLeft && <InputIcon side="left" />}
      {iconRight && <InputIcon side="right" />}
      <Message>{message}</Message>
    </>
  )
}
