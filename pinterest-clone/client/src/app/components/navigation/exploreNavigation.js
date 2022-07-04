import React from 'react'
import { Container, Col, Image, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'

import Logo from '../../assets/logo.png'
import {
  SearchBarContainer,
  SearchBar
} from '../../pages/styles/homePageStyles'

export const ExploreNavigation = ({
  exploreInput,
  render,
  setRender,
  modalShow,
  setModalShow,
  handleInput,
  removeInput,
  BootstrapStyles
}) => {
  return (
    <Container
      fluid
      style={BootstrapStyles.navigationContainer}
      className='d-flex align-items-center'
    >
      <Col lg={1}>
        <Image
          src={Logo}
          style={{ maxHeight: '5vh', marginLeft: '15px' }}
          alt='Pinhunt Logo'
        />
      </Col>
      <Col lg={9}>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 style={BootstrapStyles.navTitle}>Explore</h2>
          <SearchBarContainer className='d-flex justify-content-center align-items-center'>
            <FaSearch />
            <SearchBar
              type='text'
              value={exploreInput}
              placeholder='Search for easy dinners, fashion, etc.'
              onChange={handleInput}
            />
            {exploreInput ? <ImCancelCircle onClick={removeInput} /> : null}
          </SearchBarContainer>
        </div>
      </Col>
      <Col lg={2} className='d-flex justify-content-end'>
        <Button
          style={BootstrapStyles.buttonNavigation('login')}
          onClick={() => {
            setModalShow(true)
            setRender('login')
          }}
        >
          Log in
        </Button>
        <Button
          style={BootstrapStyles.buttonNavigation()}
          onClick={() => {
            setModalShow(true)
            setRender('create')
          }}
        >
          Sign up
        </Button>
      </Col>
    </Container>
  )
}
