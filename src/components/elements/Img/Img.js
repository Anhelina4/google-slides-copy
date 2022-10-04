import ImgStyled from './Img.styled'
import React from 'react'

const Img = (props) => {
  const {
    width,
    height,
    position,
    right,
    top,
    bottom,
    transform,
    src,
    alt,
    className,
    style,
    left,
    opacity,
    variant,
    objectFit
  } = props

  const imgProps = {
    className,
    style,
    width,
    height,
    position,
    right,
    top,
    left,
    opacity,
    bottom,
    transform,
    alt,
    src,
    variant,
    objectFit
  }
  return <ImgStyled {...imgProps} />
}

export default Img
