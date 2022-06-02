import React from 'react'
import { Container } from 'react-bootstrap'

import { Login } from '../components/auth/login'
import { Carousel } from '../components/carousel'

import { Statement } from './statements/landingPageStatement'
import { MainContainer } from './styles/landingPageStyles.js'
import { BootstrapStyles } from './styles/landingPageStyles'

export const LandingPage = () => {
  const {
    loginValues,
    subtitles,
    render,
    setRender,
    index,
    setIndex,
    carouselImages,
    serverError,
    dispatch,
    handleIndex
  } = Statement()

  return (
    <MainContainer className='d-flex flex-column justify-content-center'>
      <Container fluid style={{ backgroundColor: 'purple', height: '7vh' }}>
        NAV
      </Container>
      <Carousel
        subtitles={subtitles}
        index={index}
        carouselImages={carouselImages}
        handleIndex={handleIndex}
        BootstrapStyles={BootstrapStyles}
      />
    </MainContainer>
  )
}
