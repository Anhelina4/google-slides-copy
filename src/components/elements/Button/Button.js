import ButtonStyled from './Button.styled'
import React from 'react'

const Button = (props) => {
  const { children, shape, size, variant } = props

  const buttonProps = {
    shape,
    size,
    variant
  }

  return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>
}

export default Button
