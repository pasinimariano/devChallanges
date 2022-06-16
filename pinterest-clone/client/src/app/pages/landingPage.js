import React from 'react'

import { Section } from './styles/landingPageStyles.js'
import { NavigationLanding } from '../components/navigation/navigationLanding'
import { Carousel } from '../components/carousel'
import { SecondSection } from '../components/landing/secondSection'
import { ThirdSection } from '../components/landing/thirdSection.js'
import { FourthSection } from '../components/landing/fourthSection'

import { Statement } from './statements/landingPageStatement'
import { MainContainer } from './styles/landingPageStyles.js'
import { BootstrapStyles } from './styles/landingPageStyles'

export const LandingPage = () => {
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
    getFade,
    handleEffect
  } = Statement()

  return (
    <MainContainer className='d-flex flex-column justify-content-center'>
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
    </MainContainer>
  )
}
