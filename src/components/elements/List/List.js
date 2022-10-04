import { ListItemStyled, ListStyled } from './List.styled'

import PropTypes from 'prop-types'
import React from 'react'
import { Text } from '../../../components'

const List = (props) => {
  const { data, markerStyle } = props
  return (
    <ListStyled>
      {data?.map((item, index) => (
        <ListItemStyled markerStyle={markerStyle} key={`${index}-list-item`}>
          <Text>{item}</Text>
        </ListItemStyled>
      ))}
    </ListStyled>
  )
}
List.propTypes = {
  content: PropTypes.array,
  markerStyle: PropTypes.string
}
export default List
