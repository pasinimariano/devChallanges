import React from 'react'
import { Container, Col, Image } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'

import { AuthButtons } from '../../public/commons/authButtons'

import Logo from '../../assets/logo.png'
import {
  SearchBarContainer,
  SearchBar
} from '../../pages/styles/homePageStyles'

export const ExploreNavigation = ({
  logged,
  exploreInput,
  setRender,
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
      <Col lg={2}>
        <Image
          src={Logo}
          style={{ maxHeight: '5vh', marginLeft: '15px' }}
          alt='Pinhunt Logo'
        />
      </Col>
      <Col lg={8}>
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
        {logged ? (
          <h2>Im logged in</h2>
        ) : (
          <AuthButtons
            setRender={setRender}
            setModalShow={setModalShow}
            BootstrapStyles={BootstrapStyles}
          />
        )}
      </Col>
    </Container>
  )
}
