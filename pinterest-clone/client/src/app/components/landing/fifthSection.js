import React from 'react'
import { Col, Container, Card } from 'react-bootstrap'
import { ImArrowUp } from 'react-icons/im'

import { SectionContainer } from '../../pages/styles/landingPageStyles'
import { Login } from '../auth/login'
import { CreateUser } from '../auth/create'
import Logo from '../../assets/logoph.png'
import { Footer } from '../navigation/modal'
import { ButtonToTop } from '../../pages/styles/landingPageStyles'

const CardBody = ({ title, subtitle, body, footer, BootstrapStyles }) => {
  return (
    <Card
      style={BootstrapStyles.cardContainer}
      className='d-flex align-items-center'
    >
      <Card.Img variant='top' src={Logo} style={BootstrapStyles.cardImg} />
      <Card.Body style={{ width: '100%' }}>
        <Card.Title style={BootstrapStyles.modalTitle}>{title}</Card.Title>
        <Card.Title style={BootstrapStyles.modalSubTitle}>
          {subtitle}
        </Card.Title>
        {body}
      </Card.Body>
      <Card.Footer
        className='d-flex align-items-center'
        style={BootstrapStyles.cardFooter}
      >
        {footer}
      </Card.Footer>
    </Card>
  )
}

export const FifthSection = ({
  render,
  setRender,
  loginValues,
  createValues,
  serverError,
  dispatch,
  scrollTop,
  BootstrapStyles
}) => {
  return (
    <SectionContainer className='d-flex justify-content-center align-items-center'>
      <div
        style={BootstrapStyles.fifthSectionContainer}
        className='d-flex align-items-center justify-content-center'
      >
        <Col className='d-flex flex-column align-items-center justify-content-center'>
          <Container style={{ width: '50%' }}>
            <h2 style={BootstrapStyles.sectionTitle('wine')}>Sign up to</h2>
            <h2 style={BootstrapStyles.sectionTitle('wine')}>get your</h2>
            <h2 style={BootstrapStyles.sectionTitle('wine')}>ideas</h2>
          </Container>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          {render === 'login' ? (
            <CardBody
              title='Welcome to Pinhunt'
              body={
                <Login
                  loginValues={loginValues}
                  serverError={serverError}
                  dispatch={dispatch}
                  style={BootstrapStyles}
                />
              }
              footer={
                <Footer
                  style={BootstrapStyles}
                  setRender={setRender}
                  option='create'
                  legend='Not in Pinhunt yet? Sign Up'
                />
              }
              loginValues={loginValues}
              serverError={serverError}
              dispatch={dispatch}
              BootstrapStyles={BootstrapStyles}
            />
          ) : (
            <CardBody
              title='Welcome to Pinhunt'
              subtitle='Find new ideas to try'
              body={
                <CreateUser
                  createValues={createValues}
                  serverError={serverError}
                  dispatch={dispatch}
                  style={BootstrapStyles}
                />
              }
              footer={
                <Footer
                  style={BootstrapStyles}
                  setRender={setRender}
                  option='login'
                  legend='Already a member? Log in'
                />
              }
              loginValues={loginValues}
              serverError={serverError}
              dispatch={dispatch}
              BootstrapStyles={BootstrapStyles}
            />
          )}
        </Col>
      </div>
    </SectionContainer>
  )
}
