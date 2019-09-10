import React from 'react'

import { FontAwesomeIcon as Icon } from 'FontAwesome'

import { IconBase } from './Icon'

import { InputBase } from './Base'
import { InputButtonStyle } from './Button'
import { InputContent } from './Content'
import { InputSection } from './Section'

import { Label } from '../Label'
import { Message } from './Message'
import { Select } from '../Select'

const AfterInput = props => (
  <InputSection after="after">{props.after}</InputSection>
)
const BeforeInput = props => (
  <InputSection before="before">{props.before}</InputSection>
)

const InputIcon = props => (
  <IconBase side={props.side}>
    <Icon icon={props.icon} {...props} />
  </IconBase>
)

export const Input = props => {
  const {
    after,
    before,
    iconRight,
    iconLeft,
    forId,
    label,
    message,
    name,
    noLabel,
  } = props

  const labelName = name.toUppercase()
  console.log('name: ', name)
  console.log('labelName: ', labelName)
  return (
    <InputBase {...props}>
      {!noLabel && (
        <Label htmlFor={forId ? forId : name}>{label ? label : name}</Label>
      )}
      {before && <BeforeInput {...props} />}
      <InputSection>
        <InputContent id={forId} type="text" {...props} />
        {iconLeft && <InputIcon icon={iconLeft} side="left" />}
        {iconRight && <InputIcon icon={iconRight} side="right" />}
        {message && <Message {...props}>{message}</Message>}
      </InputSection>
      {after && <AfterInput {...props} />}
    </InputBase>
  )
}
