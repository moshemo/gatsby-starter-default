import styled from 'styled-components'
import { color } from 'styled-system'
import { colors } from 'Variables'

export const ContentBase = styled.main`
  grid-area: main;
  /* background-color: ${colors.white}; */
  /* width: calc(100% - 52px); */
  width: 100%;
  margin: 75px auto;

  ${color};
`
