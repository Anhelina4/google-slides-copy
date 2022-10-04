import React from 'react'
import TextStyled from './Text.styled'

const Text = (props) => {
  const { children } = props
  return <TextStyled {...props}>{children}</TextStyled>
}
export default Text
