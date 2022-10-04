import React from 'react'
import TitleStyled from './Title.styled'

const Title = (props) => {
  const {
    children,
    className,
    color,
    style,
    subtitle,
    type,
    textAlign,
    level = 1,
    fontWeight,
    position
  } = props

  const headerLevel = subtitle ? `subtitle` : `h${level}`
  const asHeader = subtitle ? `h5` : headerLevel

  const titleProps = {
    as: asHeader,
    level: headerLevel,
    textAlign,
    type,
    color,
    className,
    style,
    fontWeight,
    position
  }
  return (
    <TitleStyled
      {...titleProps}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

export default Title
