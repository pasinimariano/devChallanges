import $ from 'jquery'
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { Container, Card, Image, Button } from 'react-bootstrap'
import { BsHeartFill, BsFillStarFill } from 'react-icons/bs'
import { BsEmojiHeartEyes } from 'react-icons/bs'

import { setProfilePicture } from './setProfilePicture'
import '../../pages/styles/masonry.css'

const breakpointColumnsObj = {
  default: 6,
  1100: 3,
  700: 2,
  500: 1
}

export const RenderAllPins = ({ allPins, BootstrapStyles }) => {
  const [hover, setHover] = useState('')

  const pins = Object.entries(allPins).map(([key, values]) => {
    let image
    if (values.owner_profile[0] === '{') {
      image = setProfilePicture(values.owner, values.owner_profile)
    }

    return (
      <Card
        key={key}
        style={BootstrapStyles.cardContainer}
        id={key}
        onMouseEnter={() => setHover(key)}
        onMouseLeave={() => setHover('')}
      >
        <Card.Img variant='top' src={values.url} alt={values.url} />
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title style={BootstrapStyles.cardTitle}>
            {values.title}
          </Card.Title>
          <Container
            className='d-flex align-items-center justify-content-around'
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
            {values.owner}
          </Container>
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

  const CardHover =
    '<div id=hover class=myHover> <Button class=hoverButton>  Pin it </Button> </div>'

  useEffect(() => {
    if (hover) {
      const element = $(`#${hover}`)
      element.append(CardHover)
    } else {
      $('#hover').remove()
    }
  }, [hover])

  console.log(hover)
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
