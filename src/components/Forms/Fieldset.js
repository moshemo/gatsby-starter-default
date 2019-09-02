import styled from 'styled-components'

import { Input } from'./Input'
import { forms } from 'Variables'

export const Fieldset = styled.fieldset`

  [disabled] ${Input} {
    background-color: ${forms.input.disabled.backgroundColor};
    border-color: ${forms.input.disabled.borderColor};
    box-shadow: none;
    color: ${forms.input.disabled.textColor};
    cursor: not-allowed;

    ::placeholder {
      color: ${forms.input.disabled.placeholderColor};
    }
  }
`