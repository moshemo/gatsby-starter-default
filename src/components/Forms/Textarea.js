import styled from 'styled-components'

import { InputCss } from './base/InputCss'
import { forms } from 'Variables'

export const Textarea = styled.textarea`
  ${InputCss}

  min-height: ${forms.textarea.minHeight};

  ${props => props.fullWidth && `grid-column: 1 / -1;`}
`
