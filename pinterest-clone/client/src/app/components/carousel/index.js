import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

import { ImageRow } from './imagesRow'
import { CarouselTitle, FadeText } from '../../pages/styles/landingPageStyles'

export const Carousel = ({
  subtitles,
  queryImages,
  page,
  animation,
  carouselImages,
  getFade,
  handleEffect,
  BootstrapStyles
}) => {
  useEffect(() => {
    queryImages.map(image => {
      getFade(image)
    })
  }, [queryImages])

  useEffect(() => {
    handleEffect()
  }, [page])

  return (
    <Container
      fluid
      style={{
        width: '100vw',
        height: '93vh',
        position: 'relative',
        overflow: 'hidden'
      }}
      className='d-flex flex-column justify-content-end align-items-center'
    >
      <Container
        style={{
          height: '38vh',
          position: 'absolute',
          top: '0'
        }}
        className='d-flex flex-column justify-content-end align-items-center'
      >
        <CarouselTitle>Get yout next</CarouselTitle>
      </Container>

      <Container
        style={{
          height: '10vh',
          position: 'absolute',
          top: '38vh'
        }}
        className='d-flex flex-column justify-content-end align-items-center'
      >
        <FadeText id='carousel-subtitle' page={page}>
          {subtitles[page]}
        </FadeText>
        <Container className='d-flex justify-content-center'>
          {subtitles.map(subtitle => {
            const subtitleIndex = subtitles.indexOf(subtitle)
            return (
              <RiCheckboxBlankCircleFill
                key={subtitle}
                style={
                  subtitleIndex === page
                    ? BootstrapStyles.carouselControlSelected(page)
                    : BootstrapStyles.carouselControl
                }
              ></RiCheckboxBlankCircleFill>
            )
          })}
        </Container>
      </Container>
      <Container
        fluid
        style={BootstrapStyles.ImagesContainer}
        className='d-flex flex-row justify-content-around'
      >
        <ImageRow
          carouselImages={carouselImages}
          index={page}
          photo1={1}
          photo2={2}
          animation={animation}
          style={BootstrapStyles.carouselRow('200px')}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={page}
          photo1={3}
          photo2={4}
          animation={animation}
          style={BootstrapStyles.carouselRow('100px')}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={page}
          photo1={5}
          photo2={6}
          animation={animation}
          style={BootstrapStyles.carouselRow()}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={page}
          photo1={7}
          animation={animation}
          style={BootstrapStyles.carouselRow()}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={page}
          photo1={8}
          photo2={9}
          animation={animation}
          style={BootstrapStyles.carouselRow()}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={page}
          photo1={10}
          photo2={11}
          animation={animation}
          style={BootstrapStyles.carouselRow('100px')}
        />
        <ImageRow
          carouselImages={carouselImages}
          index={page}
          photo1={12}
          photo2={13}
          animation={animation}
          style={BootstrapStyles.carouselRow('200px')}
        />
      </Container>
    </Container>
  )
}
