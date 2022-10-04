import { Box } from 'components'
import styled from 'styled-components'

const ColStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
`

export default ColStyled
