import React from 'react'
import styled from 'styled-components'
import { Button } from 'Elements'
import { breakpoints as bp, colors } from 'Variables'

export const FormWrapper = styled.div`
  /* background-color: ${colors.primaryLighter}; */
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media(max-width: ${bp.md}) {
    grid-template-columns: 1fr;
  }
`

export const ContactInfo = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;

  background-color: ${colors.primaryLighter};
  color: ${colors.light};
  padding: 24px;
  font-size: 20px;
  margin: 0 auto;

  h5 {
    font-weight: 600;
    margin-bottom: 12px;
  }

  ul li {
    font-size: 24px;
  }

  @media (max-width: ${bp.sm}) {
    background: ${colors.light};
  }

  @media (min-width: ${bp.sm}) {
    height: 250px;
    width: 330px;
  }
`

// Field Component
const FieldWrapper = styled.div`
  :not(:first-child) {
    margin-top: 24px;
  }
`

const FieldLabel = styled.label`
  color: ${colors.dark};
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

const FieldInput = styled.input`
  appearance: none;
  background-color: ${colors.greyLighter};
  border: 1px solid ${colors.greyLight};
  border-radius: 2px;
  box-shadow: none;
  box-sizing: border-box;
  height: 44px;
  padding: 6px 10px;
  width: 100%;

  ${props =>
    (props.type === 'checkbox' || props.type === 'radio') && `display: inline;`}

  :focus {
    background-color: ${colors.tertiaryLighter};
    outline: 0;
  }
`

export const FieldTextarea = styled.textarea`
  appearance: none;
  background-color: ${colors.greyLighter};
  border: 1px solid ${colors.greyLight};
  border-radius: 2px;
  box-shadow: none;
  box-sizing: border-box;
  min-height: 96px;
  padding: 6px 10px;
  width: 100%;

  :focus {
    background-color: ${colors.tertiaryLighter};
    outline: 0;
  }
`

export const Field = props => (
  <FieldWrapper>
    <FieldLabel>{props.label}</FieldLabel>
    {!props.textArea && <FieldInput {...props} />}
    {props.textArea && <FieldTextarea {...props} />}
  </FieldWrapper>
)

// export const Form = styled.form`
//   padding: 24px;
// `

export const FormButton = styled(Button)`
  background-color: ${colors.primaryLighter};
  font-size: 18px;
  font-weight: 400;
  height: 56px;
  margin: 18px 0 0;
  width: 100%;

  :hover {
    background-color: ${colors.primaryLight};
  }
`
