import { Box } from '../../../components'
import HeaderStyled from './Header.styled'
import PropTypes from 'prop-types'
import React from 'react'

const Header = (props) => {
  const { left, center, right } = props
  return (
    <HeaderStyled>
      <Box>{left || null}</Box>
      <Box>{center || null}</Box>
      <Box>{right || null}</Box>
    </HeaderStyled>
  )
}

Header.propTypes = {
  breadcrumbs: PropTypes.array,
  breadcrumbsProps: PropTypes.object
}
export default Header
