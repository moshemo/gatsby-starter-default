import styled from 'styled-components'

import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { Radio } from './Radio'
import { Select } from './Select'
import { Textarea } from './Textarea'
import { forms } from 'Variables'

export const Fieldset = styled.fieldset`
  [disabled] {
    ${Input},
    ${Textarea} {
      background-color: ${forms.input.disabled.backgroundColor};
      border-color: ${forms.input.disabled.borderColor};
      box-shadow: none;
      color: ${forms.input.disabled.textColor};
      cursor: not-allowed;

      ::placeholder {
        color: ${forms.input.disabled.placeholderColor};
      }
    }

    ${Checkbox},
    ${Radio} {
      color: ${forms.input.disabled.textColor};
      cursor: not-allowed;
    }

    fieldset[disabled] ${Select} select:hover {
      border-color: ${forms.input.disabled.borderColor};
    }
  }
`
