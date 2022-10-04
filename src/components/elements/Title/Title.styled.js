import styled, { css } from 'styled-components'

const headerColor = {
  secondary: css`
    color: var(--offer-generator-title-color-secondary);
  `,
  success: css`
    color: var(--offer-generator-title-color-success);
  `,
  warning: css`
    color: var(--offer-generator-title-color-warning);
  `,
  danger: css`
    color: var(--offer-generator-title-color-danger);
  `,
  white: css`
    color: var(--offer-generator-title-color-white);
  `
}
const headerConfig = (level) => {
  const type =
    level === 'subtitle'
      ? `--offer-generator-subtitle`
      : `--offer-generator-title-${level}`
  return css`
    font-size: var(${type}-font-size);
    line-height: var(${type}-line-height);
    margin-top: var(${type}-margin-top);
    margin-bottom: var(${type}-margin-bottom);
    letter-spacing: var(${type}-letter-spacing);
    font-family: var(${type}-font-family);
  `
}

/*
Possible features:
- offsets [m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py]
- letterSpacing 
- etc
*/
const TitleStyled = styled.h1`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  position: ${(props) => props.position};
  ${(props) => headerColor[props.type]}
  ${(props) => headerConfig(props.level)};
`
export default TitleStyled
