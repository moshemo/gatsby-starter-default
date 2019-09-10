import styled from 'styled-components'

import { Button } from 'Components'
import { colors } from 'Variables'

export const InputSection = styled.div`
  position: relative;

  ${Button} {
    background-color: ${props => props.color && colors[props.color]};
    border-color: transparent;
    color: ${props => (props.darkText ? colors.dark : colors.light)};

    ${props =>
      props.before &&
      `
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    `}

    ${props =>
      props.after &&
      `
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    `}
  }
`
