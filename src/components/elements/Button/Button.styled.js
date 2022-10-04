import styled from 'styled-components'

const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  background: ${(props) => props.bg || 'unset'};
  border-radius: var(--br-4);

  ${(props) => props.size || 'var(btn-size-default)'}
  ${(props) => props.shape || 'var(btn-shape-default)'}
`

export default ButtonStyled
