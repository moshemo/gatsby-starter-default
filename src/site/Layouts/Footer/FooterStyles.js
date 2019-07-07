import styled from 'styled-components'

import { colors } from 'Variables'

export const FooterBase = styled.footer`
  display: flex;
  grid-area: footer;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.black};
  color: ${colors.grey.dark};
  padding: 0 16px;
`
