import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

import { ImageRow } from './imagesRow'
import {
  CarouselTitle,
  FadeText,
  FadeImage
} from '../../pages/styles/landingPageStyles'

export const Carousel = ({
  subtitles,
  index,
  carouselImages,
  handleIndex,
  BootstrapStyles
}) => {
  return (
    <Container
      fluid
      style={{ width: '100vw' }}
      className='d-flex flex-column justify-content-end align-items-center'
    >
      <Container
        style={{ height: '38vh' }}
        className='d-flex flex-column justify-content-end align-items-center'
      >
        <CarouselTitle>Get yout next</CarouselTitle>
      </Container>

      <Container
        style={{ height: '10vh' }}
        className='d-flex flex-column justify-content-end align-items-center'
      >
        <FadeText id='subtitle'>{subtitles[index]}</FadeText>
        <Container className='d-flex justify-content-center'>
          {subtitles.map(subtitle => {
            const subtitleIndex = subtitles.indexOf(subtitle)
            return (
              <RiCheckboxBlankCircleFill
                key={subtitle}
                onClick={() => handleIndex(subtitleIndex)}
                style={
                  subtitleIndex === index
                    ? BootstrapStyles.carouselControlSelected
                    : BootstrapStyles.carouselControl
                }
              ></RiCheckboxBlankCircleFill>
            )
          })}
        </Container>
      </Container>
      <Container
        fluid
        style={{ width: '100%' }}
        className='d-flex flex-row justify-content-around'
      >
        <ImageRow
          carouselImages={carouselImages}
          index={index}
          photo1={1}
          photo2={2}
          style={BootstrapStyles.carouselRow('350px')}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={index}
          photo1={3}
          photo2={4}
          style={BootstrapStyles.carouselRow('175px')}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={index}
          photo1={5}
          photo2={6}
          style={BootstrapStyles.carouselRow()}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={index}
          photo1={7}
          style={BootstrapStyles.carouselRow()}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={index}
          photo1={8}
          photo2={9}
          style={BootstrapStyles.carouselRow()}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={index}
          photo1={10}
          photo2={11}
          style={BootstrapStyles.carouselRow('175px')}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={index}
          photo1={12}
          photo2={13}
          style={BootstrapStyles.carouselRow('350px')}
        />
      </Container>
    </Container>
  )
}
