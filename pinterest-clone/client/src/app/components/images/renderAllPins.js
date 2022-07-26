import React from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import { BsHeartFill, BsFillStarFill } from 'react-icons/bs'
import { FcIdea } from 'react-icons/fc'

export const RenderAllPins = ({ allPins }) => {
  return (
    <Container className='d-flex flex-wrap'>
      {allPins &&
        Object.entries(allPins).map(([key, values]) => {
          return (
            <Card key={key}>
              <Card.Img
                variant='top'
                src={values.url}
                style={{ width: '30%' }}
              />
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
                  {values.likes.length}
                </Card.Footer>
              </Card.Body>
            </Card>
          )
        })}
    </Container>
  )
}
