import { Box } from 'components'
import styled from 'styled-components'

const RowStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  overflow-y: ${(props) => props.overflowY};
  overflow-x: ${(props) => props.overflowX};
`

export default RowStyled
