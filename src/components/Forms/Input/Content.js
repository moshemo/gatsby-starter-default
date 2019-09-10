import styled from 'styled-components'

import { InputCss } from './CSS'
import { colors, forms } from 'Variables'

export const InputContent = styled.input`
  ${InputCss};

  ${props => props.iconLeft && `padding-left: ${forms.input.height};`}
  ${props => props.iconRight && `padding-right: ${forms.input.height};`}

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
`
