import { CustomerPresentationAll } from 'domains/Customer/components'
import { PresentationAllHeader } from 'pages/App/Presentation/components'
import React from 'react'

const customerPresentationsAll = [
  {
    img: 'https://ssl.gstatic.com/docs/templates/thumbnails/1vhqdLh7K5xLCTknB1ejYXpXTWk-9Dvcn7GX5itBaV9Q_400.png',
    title: 'Emptyyyyyyyyyyyyyyyyyyyyyyyyy',
    description: null
  },
  {
    img: 'https://ssl.gstatic.com/docs/templates/thumbnails/1XgaJTqRWwLJY16sxYftaf1vCSCLH2LgqzsqMHqgjYy8_400.png',
    title: 'Photos',
    description: 'my photos'
  },
  {
    img: 'https://ssl.gstatic.com/docs/templates/thumbnails/1GaT7tjdqN5vZm7Kwi9X_FLPbomoUI7bukVb4YtdAFuM_400.png',
    title: 'University',
    description: '19.05.3000'
  },
  {
    img: 'https://ssl.gstatic.com/docs/templates/thumbnails/1vhqdLh7K5xLCTknB1ejYXpXTWk-9Dvcn7GX5itBaV9Q_400.png',
    title: 'Emptyyyyyyyyyyyyyyyyyyyyyyyyy',
    description: null
  },
  {
    img: 'https://ssl.gstatic.com/docs/templates/thumbnails/1XgaJTqRWwLJY16sxYftaf1vCSCLH2LgqzsqMHqgjYy8_400.png',
    title: 'Photos',
    description: 'my photos'
  }
]

const PresentationsAll = () => {
  return (
    <>
      <PresentationAllHeader />
      <CustomerPresentationAll data={customerPresentationsAll} />
    </>
  )
}

export default PresentationsAll
