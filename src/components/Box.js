import styled from 'styled-components'
import { color, space, width } from 'styled-system'

const Box = styled.div`
  ${color}
  ${space}
  ${width}
`

Box.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...width.propTypes,
}

Box.displayName = 'Box'

export default Box
