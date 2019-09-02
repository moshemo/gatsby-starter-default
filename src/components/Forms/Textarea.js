import styled from 'styled-components'
import { InputTextarea } from './InputTextarea'


export const Textarea = styled.textarea`

  ${InputTextarea}

  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: 0.625em;
  resize: vertical;

  &:not([rows]) {
    max-height: 600px;
    min-height: 120px;
  }

  &[rows] {
    height: initial;
  }

  ${props => props.fixed && `resize: none;`}
`