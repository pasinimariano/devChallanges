import React from 'react'
import Masonry from 'react-masonry-css'
import { Container, Card, Image } from 'react-bootstrap'
import { BsHeartFill, BsFillStarFill, BsEmojiHeartEyes } from 'react-icons/bs'

import { setProfilePicture } from './setProfilePicture'
import { CardHover } from './cardHover'

import { AllPinsStatement } from '../../pages/statements/homePageStatement'
import '../../pages/styles/masonry.css'

export const RenderAllPins = ({
  allPins,
  logged,
  setRender,
  setModalShow,
  setNewBoardValues,
  BootstrapStyles
}) => {
  const {
    show,
    setShow,
    hover,
    setHover,
    option,
    setOption,
    breakpointColumns,
    handleDropChange
  } = AllPinsStatement()

  const Cards = Object.entries(allPins).map(([key, values]) => {
    let image
    if (values.owner_profile[0] === '{') {
      image = setProfilePicture(values.owner, values.owner_profile)
    }

    return (
      <Card
        key={key}
        style={BootstrapStyles.cardContainer}
        id={key}
        onMouseEnter={() => {
          setHover(key)
          setShow(true)
        }}
        onMouseLeave={() => {
          setHover('')
          setShow(false)
          setOption('')
        }}
      >
        {show && hover === key ? (
          <CardHover
            imgId={key}
            url={values.url}
            boards={logged.boards}
            handleDropChange={handleDropChange}
            setRender={setRender}
            setModalShow={setModalShow}
            setNewBoardValues={setNewBoardValues}
            option={option}
          />
        ) : null}
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

  return (
    <Container
      fluid
      className='d-flex justify-content-center'
      style={BootstrapStyles.galeryContainer}
    >
      <Masonry
        breakpointCols={breakpointColumns}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {allPins && Cards}
      </Masonry>
    </Container>
  )
}
