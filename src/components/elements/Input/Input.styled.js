import styled from 'styled-components'

const InputStyled = styled.input`
  width: ${(props) => props.width || '100%'};
  background-color: var(--input-bg-default);
  border: none;
  outline: none;
  border-radius: var(--br-4);
  padding: 12px 16px;
`

export default InputStyled
