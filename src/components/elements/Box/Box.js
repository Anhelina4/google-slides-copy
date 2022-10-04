import BoxStyled from './Box.styled'
import React from 'react'

const Box = (props) => {
  const { children } = props
  return <BoxStyled {...props}>{children}</BoxStyled>
}
export default Box
