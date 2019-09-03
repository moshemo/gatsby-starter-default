import React from 'react'
import styled from 'styled-components'

import { InputCss } from './base/InputCss'
import { Label } from './Label'
import { colors, forms } from 'Variables'

export const InputBase = styled.div`
  margin-bottom: ${forms.input.marginBottom};
  /* margin-bottom: 30px;
  min-height: 90px; */
`

const InputContent = styled.input`
  ${InputCss};
  

  ${props =>
    props.plain &&
    `
    background-color: transparent;
    border: none;
    :focus { border: none; }
  `}

  ${props => props.fullWidth && `grid-column: 1 / -1;`}
  ${props => {
    if (props.error) {
      return `border-color: ${colors.error}`
    } else if (props.info) {
      return `border-color: ${colors.info}`
    } else if (props.success) {
      return `border-color: ${colors.success}`
    } else if (props.warning) {
      return `border-color: ${colors.warning}`
    }
  }};

/* ${props => props.message && `margin-bottom 0;`} */
`

const InputSection = styled.div``

const InputIcon = styled.i``
const Message = styled.p`
  color: ${props => {
    if (props.error) {
      return colors.error
    } else if (props.info) {
      return colors.info
    } else if (props.success) {
      return colors.success
    } else if (props.warning) {
      return colors.warning
    }
  }};

  font-size: 0.875rem;
  padding: 0;
  margin: 0.25rem 0 0;
`

export const Input = props => {
  const { iconRight, iconLeft, forId, label, message } = props
  return (
    <InputBase>
      <Label htmlFor={forId} {...props}>
        {label}
      </Label>
      <InputSection>
        <InputContent id={forId} type="text" {...props} />
        {iconLeft && <InputIcon side="left" />}
        {iconRight && <InputIcon side="right" />}
        {message && <Message {...props}>{message}</Message>}
      </InputSection>
    </InputBase>
  )
}

export const Date = props => <Input type="date" {...props} />
export const DateTimeLocal = props => <Input type="datetime-local" {...props} />
export const Email = props => <Input type="email" {...props} />
export const Hidden = props => <Input type="hidden" {...props} />
export const Month = props => <Input type="month" {...props} />
export const Number = props => <Input type="number" {...props} />
export const Password = props => <Input type="password" {...props} />

export const Search = props => <Input type="search" {...props} />
export const Text = props => <Input type="text" {...props} />
export const Tel = props => <Input type="tel" {...props} />
export const Time = props => <Input type="time" {...props} />
export const URL = props => <Input type="url" {...props} />
export const Week = props => <Input type="week" {...props} />

export const Color = props => <Input plain type="color" {...props} />
export const File = props => <Input plain type="file" {...props} />
export const Image = props => <Input plain type="image" {...props} />
export const Range = props => <Input plain type="range" {...props} />
