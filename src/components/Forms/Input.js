import React from 'react'
import styled from 'styled-components'

import { forms } from 'Variables'
import { InputCss } from './base/InputCss'

import { Fieldset } from './Fieldset'
// import { Label } from './Label'
import { Legend } from './Legend'

import { breakpoints as bp } from 'Variables'

export const InputBase = styled.input.attrs(props => ({ type: 'text' }))`
  ${InputCss};
`

export const Checkbox = styled.input.attrs(props => ({ type: 'checkbox' }))`
  display: inline;
`

export const Radio = styled.input.attrs(props => ({ type: 'radio' }))`
  display: inline;
`

export const Email = styled(InputBase).attrs(props => ({ type: 'email' }))``
export const Number = styled(InputBase).attrs(props => ({ type: 'number' }))``
export const Password = styled(InputBase).attrs(props => ({
  type: 'password',
}))``
export const Search = styled(InputBase).attrs(props => ({ type: 'search' }))``
export const TextInput = styled(InputBase).attrs(props => ({ type: 'text' }))``
export const Tel = styled(InputBase).attrs(props => ({ type: 'tel' }))``
export const URL = styled(InputBase).attrs(props => ({ type: 'url' }))``

const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
`

const Field = styled.div`
  :not(:last-child) {
    margin-bottom: 0.75rem;
  }

  ${props =>
    props.horizontal &&
    ` 
      @media screen and (min-width: ${bp.md}), print { 
      display: flex; }
    `}
`

const FieldLabelBase = styled.div`
  @media screen and (min-width: ${bp.md}) {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: ${bp.md}), print {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    padding-top: 0.375em;
    text-align: right;
    /* font-size: 0.75rem; */
  }
`

const FieldBodyBase = styled.div`
  ${Field} ${Field} {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${bp.md}) {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;

    ${Field} {
      margin-bottom: 0;
    }
    > ${Field} {
      flex-shrink: 1;
      :not(:last-child) {
        margin-right: 0.75rem;
      }
    }
  }
`
const Icon = styled.span``

const LabelBase = styled.label`
  color: #363636;
  display: block;
  font-size: ${forms.input.fontSize};
  font-weight: 700;

  :not(:last-child) {
    margin-bottom: 0.5em;
  }
`

const Message = styled.p``

const FieldLabel = (props, { label }) => (
  <FieldLabelBase>
    <LabelBase>{label}</LabelBase>
  </FieldLabelBase>
)

const Label = ({ label }) => <LabelBase>{label}</LabelBase>

const InputContent = (props, { iconLeft, iconRight }) => (
  <>
    <InputBase {...props} />
    {iconLeft && <Icon side="left" />}
    {iconRight && <Icon side="right" />}
  </>
)

const FieldBody = (props, { children }) => (
  <FieldBodyBase>
    <Field>
      <Control>{children}</Control>
    </Field>
  </FieldBodyBase>
)

export const Input = (
  props,
  { label, helpMessage, horizontal, iconRight, iconLeft }
) => (
  <Field horizontal>
    {horizontal ? <FieldLabel label={label} /> : <Label label={label} />}
    {horizontal ? (
      <FieldBody>
        <InputContent {...props} />
      </FieldBody>
    ) : (
      <Control>
        <InputContent {...props} />
      </Control>
    )}
    {helpMessage && <Message />}
  </Field>
)
