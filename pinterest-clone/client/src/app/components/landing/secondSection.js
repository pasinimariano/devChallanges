import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container } from 'react-bootstrap'
import { HiSearch } from 'react-icons/hi'

import { SectionContainer } from '../../pages/styles/landingPageStyles'

export const SecondSection = ({ BootstrapStyles }) => {
  return (
    <SectionContainer
      className='d-flex justify-content-center align-items-center'
      section='two'
    >
      <Col
        className='d-flex justify-content-center align-items-center'
        style={{ height: '80%' }}
      >
        <Container
          className='d-flex justify-content-center align-items-center'
          style={BootstrapStyles.secondSectionImagesContainer}
        >
          <div
            style={BootstrapStyles.secondSectionImage(
              '38%',
              '55%',
              'https://s.pinimg.com/webapp/center-77497603.png',
              1
            )}
          />

          <div
            style={BootstrapStyles.secondSectionImage(
              '30%',
              '36%',
              'https://s.pinimg.com/webapp/left-511a9304.png',
              0,
              250,
              450
            )}
          />

          <div
            style={BootstrapStyles.secondSectionImage(
              '25%',
              '28%',
              'https://s.pinimg.com/webapp/topRight-d0230035.png',
              0,
              90,
              140
            )}
          />

          <div
            style={BootstrapStyles.secondSectionImage(
              '23%',
              '32%',
              'https://s.pinimg.com/webapp/right-88044782.png',
              0,
              450,
              120
            )}
          />

          <div
            className='d-flex justify-content-center align-items-center'
            style={BootstrapStyles.secondSectionInput}
          >
            <HiSearch style={BootstrapStyles.secondSectionIcon} size='40' />
            <h2 style={BootstrapStyles.secondSectionSpan}>
              easy chicken dinner
            </h2>
          </div>
        </Container>
      </Col>
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <h2 style={BootstrapStyles.sectionTitle('wine')}>Search for an idea</h2>
        <span style={BootstrapStyles.sectionSpan('wine')}>
          What do you want to try next? Think of something you’re into—like
          “easy chicken dinner”—and see what you find.
        </span>
        <Link to='/home'>
          <Button style={BootstrapStyles.sectionButton('yellow')}>
            Explore
          </Button>
        </Link>
      </Col>
    </SectionContainer>
  )
}
