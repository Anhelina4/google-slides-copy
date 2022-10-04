import styled from 'styled-components'

const SvgStyled = styled.svg`
  height: ${({ height }) => height || 'var(--icon-size)'};
  width: ${({ width }) => width || 'var(--icon-size)'};
`

export default SvgStyled
