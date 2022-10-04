import styled from 'styled-components'

const BoxStyled = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent || 'unset'};
  align-items: ${(props) => props.alignItems || 'unset'};
  position: ${(props) => props.position};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex: ${(props) => props.flex || 'none'};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  margin-left: ${(props) => props.ml};
  background: ${(props) => props.bg};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.p};
`
export default BoxStyled
