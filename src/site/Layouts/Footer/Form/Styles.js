import React from 'react'
import styled, { css } from 'styled-components'
import { ScreenReader } from 'Forms/ScreenReader'
import { Button } from 'Elements'
import { colors } from 'Variables'

const FieldWrapper = styled.div`
  margin-bottom: 8px;
`

const FieldLabel = styled.label`
  ${ScreenReader}
`

const inputStyles = css`
  appearance: none;
  background-color: ${colors.light};
  border: 1px solid ${colors.greyDarker};
  border-radius: 2px;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  height: 40px;
  margin-bottom: 6px;
  padding: 5px 14px;
  width: 100%;

  :focus {
    background-color: ${colors.tertiaryLighter};
    border-color: ${colors.greyDark};
    outline: 0;
  }
`

const FieldInput = styled.input`
  ${inputStyles}
  min-height: 33px;

  ${props => props.tall && `min-height: 47px;`};
  ${props =>
    (props.type === 'checkbox' || props.type === 'radio') && `display: inline;`}
`

export const FieldTextarea = styled.textarea`
  ${inputStyles}

  min-height: 80px;
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
  background-color: ${colors.accent};
  border: 5px solid ${colors.accent};
  font-size: 15px;
  font-weight: 600;
  min-height: 47px;
  margin: 12px 0 0;
  transition: all 0.5 ease-in-out;
  width: 100%;

  :hover {
    /* background-color: #000; */
    /* color: ${colors.accent}; */
    background-color: ${colors.accentDark};
    border-color: ${colors.accentDark};
  }
`
