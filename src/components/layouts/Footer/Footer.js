import { Box, Text } from '../../../components'

import FooterStyled from './Footer.styled'
import React from 'react'

const Footer = () => {
  return (
    <FooterStyled>
      <Box className="container">
        <Box className="row justify-content-between">
          <Box className="col-auto">
            <Text variant="caption1" type="secondary" className="fw-medium">
              senseteq.io
            </Text>
          </Box>
        </Box>
      </Box>
    </FooterStyled>
  )
}

export default Footer
