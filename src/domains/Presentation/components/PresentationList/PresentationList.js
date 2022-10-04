import { Box, Button, Col, Img, Row, Text } from 'components'

import PresentationListWrapper from './PresentationList.styled'
import { PresentationSimpleView } from 'domains/Presentation/components'
import React from 'react'
import chevronSelector from 'assets/icons/chevron-selector-vertical.svg'
import dotsVertical from 'assets/icons/dots-vertical.svg'

const PresentationList = (props) => {
  const { data, withTitle } = props

  return (
    <PresentationListWrapper>
      {withTitle && (
        <Row width="70vw" mb="8px" mt="8px" justifyContent="space-between">
          <Col>
            <Text variant="body2">Create presentation</Text>
          </Col>
          <Col>
            <Row>
              <Col>
                <Button>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text variant="body2">Patterns gallery</Text>
                    <Img src={chevronSelector} width={16} height={18} />
                  </Box>
                </Button>
              </Col>
              <Col>
                <Button>
                  <Img src={dotsVertical} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <Row width="70vw">
        {data?.map((item, index) => (
          <Col key={`${index}-list-item`} mr="16px" mb="16px">
            <PresentationSimpleView {...item} />
          </Col>
        ))}
      </Row>
    </PresentationListWrapper>
  )
}

export default PresentationList
