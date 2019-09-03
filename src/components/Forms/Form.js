import styled from 'styled-components'

import { InputBase } from './Input'
import { Label } from './Label'

export const Form = styled.form`
  ${props =>
    props.columns &&
    `
    display: grid;
    grid-gap: 24px;
    grid-template-columns: ${props.columns === '3' ? `1fr 1fr 1fr` : `1fr 1fr`}
  `}

  ${props =>
    props.horizontal &&
    `
    ${InputBase} {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-gap: 24px;
      ${Label} {
        text-align: right;
        position: relative; 
        top: 6px;
      }
    }
  `}
`
