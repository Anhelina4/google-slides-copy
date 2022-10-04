import { Col, Row } from 'components'

import { PresentationList } from 'domains/Presentation/components'
import React from 'react'

const CustomerPresentationAll = (props) => {
  const { data } = props

  return (
    <Row bg="var(--bg-grey)" justifyContent="center" >
      <Col>
        <PresentationList data={data} withTitle />
      </Col>
    </Row>
  )
}

export default CustomerPresentationAll
