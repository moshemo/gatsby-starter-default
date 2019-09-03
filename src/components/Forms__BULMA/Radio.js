import styled from 'styled-components'

import { CheckboxRadios } from './base/CheckboxRadio'

export const Radio = styled.input`
  ${CheckboxRadios};

  & + & {
    margin-left: 0.5em;
  }
`
