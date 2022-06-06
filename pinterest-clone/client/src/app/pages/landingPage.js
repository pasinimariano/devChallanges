import React, { useEffect } from 'react'
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
    page,
    queryImages,
    animation,
    carouselImages,
    serverError,
    dispatch,
    getFade,
    handleEffect
  } = Statement()

  return (
    <MainContainer className='d-flex flex-column justify-content-center'>
      <Container fluid style={{ backgroundColor: 'purple', height: '7vh' }}>
        NAV
      </Container>
      <Carousel
        subtitles={subtitles}
        queryImages={queryImages}
        page={page}
        animation={animation}
        carouselImages={carouselImages}
        getFade={getFade}
        handleEffect={handleEffect}
        BootstrapStyles={BootstrapStyles}
      />
    </MainContainer>
  )
}
