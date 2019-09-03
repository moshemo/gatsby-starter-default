import styled from 'styled-components'

import { InputCss } from './base/InputCss'

export const Select = styled.select`
  ${InputCss};

  appearance: menulist;

  ${props => props.fullWidth && `grid-column: 1 / -1;`}
`
