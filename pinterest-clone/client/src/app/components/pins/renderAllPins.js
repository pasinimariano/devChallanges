import React from 'react'
import { Container, Row, Card, Image } from 'react-bootstrap'
import { BsHeartFill, BsFillStarFill } from 'react-icons/bs'
import { BsEmojiHeartEyes } from 'react-icons/bs'
import Masonry from 'react-masonry-css'

import { setProfilePicture } from './setProfilePicture'
import '../../pages/styles/masonry.css'

const breakpointColumnsObj = {
  default: 6,
  1100: 3,
  700: 2,
  500: 1
}

export const RenderAllPins = ({ allPins, BootstrapStyles }) => {
  const pins = Object.entries(allPins).map(([key, values]) => {
    let image
    if (values.owner_profile[0] === '{') {
      image = setProfilePicture(values.owner, values.owner_profile)
    }
    console.log(image)
    return (
      <Card key={key} style={BootstrapStyles.cardContainer}>
        <Card.Img
          variant='top'
          src={values.url}
          style={BootstrapStyles.cardImg}
        />
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title style={BootstrapStyles.cardTitle}>
            {values.title}
          </Card.Title>
          <Card.Text
            className='d-flex align-items-end justify-content-around'
            style={BootstrapStyles.ownerContainer}
          >
            {image ? (
              image
            ) : (
              <Image
                src={values.owner_profile}
                alt={`${values.owner} profile picture`}
                style={BootstrapStyles.ownerProfile}
              />
            )}
            <h5 style={BootstrapStyles.cardOwner}>{values.owner}</h5>
          </Card.Text>
          <Card.Footer
            className='d-flex justify-content-around align-items-center'
            style={BootstrapStyles.cardFooter}
          >
            <BsHeartFill style={BootstrapStyles.heartIcon} />
            <BsEmojiHeartEyes style={BootstrapStyles.emogiIcon} />
            <BsFillStarFill style={BootstrapStyles.starIcon} />
            {values.likes.length - 1}
          </Card.Footer>
        </Card.Body>
      </Card>
    )
  })

  return (
    <Container
      fluid
      className='d-flex justify-content-center'
      style={BootstrapStyles.galeryContainer}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {allPins && pins}
      </Masonry>
    </Container>
  )
}
