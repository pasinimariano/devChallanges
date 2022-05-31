import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import { Login } from '../components/auth/login'
import { Statement } from './statements/landingPageStatement'
import { Styles } from './styles/landingPageStyles.js'

export const LandingPage = () => {
  const { loginValues, render, setRender, serverError, dispatch } = Statement()

  return (
    <div
      style={Styles.mainContainer}
      className='d-flex flex-column justify-content-center'
    >
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Container style={Styles.form}>
            {render === 'login' ? (
              <Login
                loginValues={loginValues}
                setRender={setRender}
                serverError={serverError}
                dispatch={dispatch}
              />
            ) : null}
          </Container>
        </Row>
      </Container>
    </div>
  )
}
