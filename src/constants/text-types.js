import { css } from 'styled-components'

const TEXT_TYPES = {
  primary: css`
    color: var(--offer-generator-text-color-primary);
  `,
  accent: css`
    color: var(--offer-generator-text-color-accent);
  `,
  secondary: css`
    color: var(--offer-generator-text-color-secondary);
  `,
  black: css`
    color: var(--offer-generator-text-color-black);
  `,
  white: css`
    color: var(--offer-generator-text-color-white);
  `,
  danger: css`
    color: var(--offer-generator-text-color-danger);
  `,
  warning: css`
    color: var(--offer-generator-text-color-warning);
  `,
  default: css`
    color: var(--offer-generator-text-color-white);
  `
}

export default TEXT_TYPES
