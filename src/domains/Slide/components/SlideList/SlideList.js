import { Box, List } from '../../../../components'

import React from 'react'

const SlideList = (props) => {
  const { data } = props
  return data?.map((item, index) => <Box key={`${index}-list-item`}></Box>)
}

export default SlideList
