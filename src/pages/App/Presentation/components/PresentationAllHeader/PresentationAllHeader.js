import { Box, Button, Col, Header, Img, Input, Row, Text } from 'components'

import React from 'react'
import file from 'assets/icons/file-05.svg'
import menu1 from 'assets/icons/menu1.svg'
import menu2 from 'assets/icons/menu2.svg'
import user1 from 'assets/icons/user1.svg'

const PresentationAllHeader = () => {
  return (
    <Header
      left={
        <Row alignItems="center">
          <Col>
            <Button mr="16px">
              <Img src={menu1} />
            </Button>
          </Col>
          <Col>
            <Button mr="16px">
              <Img src={file} />
            </Button>
          </Col>
          <Col>
            <Box display="flex">
              <Text textAlign="center">Presentations</Text>
            </Box>
          </Col>
        </Row>
      }
      right={
        <Row alignItems="center">
          <Col>
            <Button mr="16px">
              <Img src={menu2} />
            </Button>
          </Col>
          <Col>
            <Button>
              <Img src={user1} />
            </Button>
          </Col>
        </Row>
      }
      center={<Input placeholder="Search" width="720px" height="46px" />}
    />
  )
}

export default PresentationAllHeader
