import { TEXT_TYPES, TEXT_VARIANTS } from '../../../constants'

import styled from 'styled-components'

const TextStyled = styled.p`
  margin: 0px;
  font-size: ${(props) => props.fontSize || TEXT_VARIANTS.default.fontSize};
  line-height: ${(props) =>
    props.lineHeight || TEXT_VARIANTS.default.lineHeight};
  font-weight: ${(props) =>
    props.fontWeight || TEXT_VARIANTS.default.fontWeight};
  letter-spacing: ${(props) =>
    props.letterSpacing || TEXT_VARIANTS.default.letterSpacing};
  font-family: ${(props) =>
    props.fontFamily || TEXT_VARIANTS.default.fontFamily};
  color: ${(props) => TEXT_VARIANTS.default.color};
  text-transform: ${(props) => props.textTransform};

  ${(props) => props.variant && TEXT_VARIANTS[props.variant]}
  ${(props) => props.type && TEXT_TYPES[props.type]} 
  
  /* rewrote specific properties */
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: ${(props) => props.letterSpacing};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`

export default TextStyled
