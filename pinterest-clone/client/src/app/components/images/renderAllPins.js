import React from 'react'
import { Container, Row, Card, Image } from 'react-bootstrap'
import { BsHeartFill, BsFillStarFill } from 'react-icons/bs'
import { FcIdea } from 'react-icons/fc'
import Masonry from 'react-masonry-css'

import '../../pages/styles/masonry.css'

export const RenderAllPins = ({ allPins }) => {
  const pins = Object.entries(allPins).map(([key, values]) => {
    return (
      <Card key={key}>
        <Card.Img variant='top' src={values.url} />
        <Card.Body>
          <Card.Title>{values.title}</Card.Title>
          <Card.Text>
            <Image src={values.owner_profile} />
            {values.owner.toUpperCase()}
          </Card.Text>
          <Card.Footer>
            <BsHeartFill />
            <FcIdea />
            <BsFillStarFill />
            {values.likes.length - 1}
          </Card.Footer>
        </Card.Body>
      </Card>
    )
  })

  return (
    <Masonry
      breakpointCols={6}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {allPins && pins}
    </Masonry>
  )
}
