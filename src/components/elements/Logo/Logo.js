import { Img } from '../../../components'
import React from 'react'

const Logo = (props) => {
  // [COMPUTED PROPERTIES]
  const logo = '/senseteqLogo.svg'

  return <Img src={logo} height="42px" {...props} />
}

export default Logo
