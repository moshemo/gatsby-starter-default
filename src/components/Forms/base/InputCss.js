import { css } from 'styled-components'

import { forms } from 'Variables'

export const InputCss = css`
  appearance: none;
  background-color: ${forms.input.backgroundColor};

  border: ${forms.input.border};
  border-radius: ${forms.input.borderRadius};

  box-shadow: ${forms.input.boxShadow};
  box-sizing: border-box;

  height: ${forms.input.height};
  margin-bottom: 1.5rem;
  padding: ${forms.input.padding};

  :focus {
    border: ${forms.input.focusBorder};
    outline: 0;
  }
`
