import styled from 'styled-components'

import { Button } from 'Components'
import { forms } from 'Variables'

export const InputBase = styled.div`
  margin-bottom: ${forms.input.marginBottom};

  ${props =>
    (props.before || props.after) &&
    `
      display: flex; 
      align-items: center;
      justify-content: flex-start; 
    
      ${Button} {
        margin: 0;
      }
    `}

  ${props => props.before && `:last-child { margin-right: -1px; }`}
  ${props => props.after && `:last-child { margin-left: -1px; }`}


`
