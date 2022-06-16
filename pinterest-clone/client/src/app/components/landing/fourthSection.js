import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Button, Image } from 'react-bootstrap'

import { SectionContainer } from '../../pages/styles/landingPageStyles'

export const FourthSection = ({ BootstrapStyles }) => {
  return (
    <SectionContainer
      className='d-flex justify-content-center align-items-center'
      section='fourth'
    >
      <Col
        style={BootstrapStyles.fourthSectionImageContainer}
        className='d-flex align-items-end'
      >
        <div style={BootstrapStyles.fourthSectionImagePosition}>
          <div style={BootstrapStyles.fourthSectionImage} />
          <Image
            rounded={true}
            src={'https://s.pinimg.com/webapp/creator-avatar-d7a05622.png'}
            style={BootstrapStyles.fourthSectionAvatar}
          />
          <h4 style={BootstrapStyles.fourthSectionText('385px', '185px')}>
            Scout the City
          </h4>
          <h4 style={BootstrapStyles.fourthSectionText('410px', '185px')}>
            56.7k followers
          </h4>
        </div>
      </Col>
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <h2 style={BootstrapStyles.sectionTitle('pink')}>
          See it, make it, try it, do it
        </h2>
        <span style={BootstrapStyles.sectionSpan('pink')}>
          The best part of Pinterest is discovering new things and ideas from
          people around the world.
        </span>
        <Link to='/home'>
          <Button style={BootstrapStyles.sectionButton('pink')}>Explore</Button>
        </Link>
      </Col>
    </SectionContainer>
  )
}
