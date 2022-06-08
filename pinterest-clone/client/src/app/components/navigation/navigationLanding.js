import React from 'react'
import { Container, Col, Image, Button } from 'react-bootstrap'

import Logo from '../../assets/logo.png'
import { ModalAuth } from './modal'
import { Login } from '../auth/login'

export const NavigationLanding = ({
  render,
  setRender,
  modalShow,
  setModalShow,
  loginValues,
  serverError,
  dispatch,
  BootstrapStyles
}) => {
  return (
    <Container
      fluid
      style={BootstrapStyles.navigationConteiner}
      className='d-flex align-items-center'
    >
      <Col>
        <Image
          src={Logo}
          style={{ maxHeight: '5vh', marginLeft: '15px' }}
          alt='Pinhunt Logo'
        />
      </Col>
      <Col className='d-flex justify-content-end'>
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
      {render === 'login' ? (
        <ModalAuth
          title='Welcome to Pinhunt'
          body={
            <Login
              loginValues={loginValues}
              setRender={setRender}
              serverError={serverError}
              dispatch={dispatch}
              style={BootstrapStyles}
            />
          }
          footer='login'
          show={modalShow}
          onHide={() => setModalShow(false)}
          style={BootstrapStyles}
          onClick={() => setRender('create')}
        />
      ) : (
        <ModalAuth
          title='OTRO'
          body={
            <Login
              loginValues={loginValues}
              setRender={setRender}
              serverError={serverError}
              dispatch={dispatch}
              style={BootstrapStyles}
            />
          }
          footer='jaja'
          show={modalShow}
          onHide={() => setModalShow(false)}
          style={BootstrapStyles}
          onClick={() => setRender('create')}
        />
      )}
    </Container>
  )
}
