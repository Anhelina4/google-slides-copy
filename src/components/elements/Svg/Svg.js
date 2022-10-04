import { ICONS_VARIANTS } from '../../../constants'
import React from 'react'
import SvgStyled from './Svg.styled'

const Svg = (props) => {
  const { width, height, fillVariant, src } = props
  const iconFill = ICONS_VARIANTS[fillVariant] || 'var(--icon-color-default)'

  return (
    <SvgStyled
      width={width}
      height={height}
     
      fill={iconFill}
    >{src}</SvgStyled>
  )
}

export default Svg
