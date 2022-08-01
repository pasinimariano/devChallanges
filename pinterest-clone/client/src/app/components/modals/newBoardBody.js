import React from 'react'
import { Container, Image } from 'react-bootstrap'

import {
  SearchBarContainer,
  SearchBar
} from '../../pages/styles/homePageStyles'

export const NewBoardBody = ({ newBoardValues, BootstrapStyles }) => {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <Image src={newBoardValues.url} style={BootstrapStyles.newBoardImg} />
      <h2 style={BootstrapStyles.newBoardTitle}> Title </h2>
      <SearchBarContainer className='d-flex justify-content-center align-items-center'>
        <SearchBar type='text' placeholder='Like "Dinners" or "Fashion"' />
      </SearchBarContainer>
    </Container>
  )
}
