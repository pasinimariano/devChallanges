import React from 'react'
import { Row } from 'react-bootstrap'

import { FadeImage } from '../../pages/styles/landingPageStyles'

export const ImageRow = ({ carouselImages, index, photo1, photo2, style }) => {
  return (
    <Row style={style} className='d-flex flex-column justify-content-center'>
      <FadeImage fade={1} image={carouselImages[index][photo1]} />
      {photo2 ? (
        <FadeImage fade={2} image={carouselImages[index][photo2]} />
      ) : null}
    </Row>
  )
}
