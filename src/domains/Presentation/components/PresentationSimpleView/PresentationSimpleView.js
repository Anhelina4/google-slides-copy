import { Box, Img, Text } from 'components'
import {
  PresentationImageWrapper,
  PresentationSimpleViewWrapper
} from './PresentationSimpleView.styled'

import React from 'react'

const PresentationSimpleView = (props) => {
  const { img, title, description } = props

  return (
    <PresentationSimpleViewWrapper>
      <PresentationImageWrapper>
        <Img src={img} objectFit="contain" width="98%" height="98%" />
      </PresentationImageWrapper>
      <Box >
        <Text variant="body2" className="text-ellipsis">
          {title || null}
        </Text>
      </Box>
      <Box>
        <Text variant="body2" type="secondary" className="text-ellipsis">
          {description || null}
        </Text>
      </Box>
    </PresentationSimpleViewWrapper>
  )
}

export default PresentationSimpleView
