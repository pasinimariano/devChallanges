import React, { useEffect } from 'react'

import { Section } from './styles/landingPageStyles.js'
import { NavigationLanding } from '../components/navigation/navigationLanding'
import { Carousel } from '../components/carousel'
import { SecondSection } from '../components/landing/secondSection'
import { ThirdSection } from '../components/landing/thirdSection.js'
import { FourthSection } from '../components/landing/fourthSection'
import { FifthSection } from '../components/landing/fifthSection.js'

import { Statement } from './statements/landingPageStatement'
import { MainContainer } from './styles/landingPageStyles.js'
import { BootstrapStyles } from './styles/landingPageStyles'
import { Alert } from 'react-bootstrap'

export const LandingPage = ({ logged }) => {
  const {
    loginValues,
    createValues,
    subtitles,
    render,
    setRender,
    modalShow,
    setModalShow,
    page,
    queryImages,
    animation,
    carouselImages,
    serverError,
    dispatch,
    navigate,
    getFade,
    handleEffect,
    scrollTop,
    handleScroll
  } = Statement()

  useEffect(() => {
    if (logged) {
      setModalShow(false)

      setTimeout(() => navigate('/home'), 3000)
    }
  }, [logged, navigate])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <MainContainer className='d-flex flex-column justify-content-center'>
      {logged ? (
        <Alert variant='success'>
          {`Welcome to Pinhunt ${logged.firstname}`}
        </Alert>
      ) : null}

      <Section>
        <NavigationLanding
          render={render}
          setRender={setRender}
          modalShow={modalShow}
          setModalShow={setModalShow}
          loginValues={loginValues}
          createValues={createValues}
          serverError={serverError}
          dispatch={dispatch}
          BootstrapStyles={BootstrapStyles}
        />
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
      </Section>
      <Section>
        <SecondSection BootstrapStyles={BootstrapStyles} />
      </Section>
      <Section>
        <ThirdSection BootstrapStyles={BootstrapStyles} />
      </Section>
      <Section>
        <FourthSection BootstrapStyles={BootstrapStyles} />
      </Section>
      <Section>
        <FifthSection
          render={render}
          setRender={setRender}
          loginValues={loginValues}
          createValues={createValues}
          serverError={serverError}
          dispatch={dispatch}
          scrollTop={scrollTop}
          BootstrapStyles={BootstrapStyles}
        />
      </Section>
    </MainContainer>
  )
}
