import { css } from 'styled-components'

import { colors, fonts, forms } from 'Variables'

export const CheckboxRadio = css`
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;

  input {
    cursor: pointer;
  }

  :hover {
    color: $input-hover-color;
  }

  &[disabled] {
    color: ${forms.input.disabled.textColor};
    cursor: not-allowed;
  }
`
