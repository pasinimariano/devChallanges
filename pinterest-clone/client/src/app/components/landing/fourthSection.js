import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Button } from 'react-bootstrap'

import { SectionContainer } from '../../pages/styles/landingPageStyles'

export const FourthSection = ({ BootstrapStyles }) => {
  return (
    <SectionContainer
      className='d-flex justify-content-center align-items-center'
      section='fourth'
    >
      <Col>2</Col>
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <h2 style={BootstrapStyles.sectionTitle('blue')}>
          Save ideas you like
        </h2>
        <span style={BootstrapStyles.sectionSpan('blue')}>
          Collect your favorites so you can get back to them later.
        </span>
        <Link to='/home'>
          <Button style={BootstrapStyles.sectionButton('blue')}>Explore</Button>
        </Link>
      </Col>
    </SectionContainer>
  )
}
