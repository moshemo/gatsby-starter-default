import styled from 'styled-components'
import { color, fontSize, space } from 'styled-system'
import { colors } from 'Variables'

export const Button = styled('button')`
  background-color: ${colors.dark};
  border: none;
  border-radius: 2px;
  color: ${colors.light};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  height: 36px;
  letter-spacing: 0.5px;
  line-height: 36px;
  min-width: 88px;
  margin: 6px 8px;
  outline: 0;
  padding: 0 16px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  vertical-align: middle;

  &:hover {
    background-color: rgba(0,0,0,.5);
  }

  ${color}
  ${fontSize}
  ${space}
`
