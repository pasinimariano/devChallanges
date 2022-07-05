import React from 'react'
import { Modal, Container, Image } from 'react-bootstrap'

import Logo from '../../assets/logoph.png'

export const Footer = ({ style, setRender, option, legend }) => {
  return (
    <Container className='d-flex justify-content-center'>
      <h6
        style={style.footer}
        onClick={() => setRender(option)}
        onMouseOver={e => (e.target.style.color = 'purple')}
        onMouseLeave={e => (e.target.style.color = 'black')}
      >
        {legend}
      </h6>
    </Container>
  )
}

export const ModalAuth = ({
  title,
  subtitle,
  body,
  footer,
  show,
  onHide,
  style,
  setRender
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id='contained-modal-title-vcenter'
          style={style.modalTitleContainer}
          className='d-flex flex-column align-items-center'
        >
          <Image src={Logo} alt='Logo pinhunt' style={style.modalLogo} />
          <h2 style={style.modalTitle}> {title} </h2>
          {subtitle ? <h2 style={style.modalSubTitle}>{subtitle}</h2> : null}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {footer === 'login' ? (
          <Footer
            style={style}
            setRender={setRender}
            option='create'
            legend='Not in Pinhunt yet? Sign Up'
          />
        ) : (
          <Footer
            style={style}
            setRender={setRender}
            option='login'
            legend='Already a member? Log in'
          />
        )}
      </Modal.Footer>
    </Modal>
  )
}
