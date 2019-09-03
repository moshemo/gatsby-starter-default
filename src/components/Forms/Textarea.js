import styled from 'styled-components'

import { InputCss } from './base/InputCss'
import { forms } from 'Variables'

export const Textarea = styled.textarea`
  ${InputCss}

  min-height: ${forms.textarea.minHeight};
`
