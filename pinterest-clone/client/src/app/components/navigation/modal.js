import React from 'react'
import { Modal, Container, Image } from 'react-bootstrap'

import Logo from '../../assets/logoph.png'

const Footer = ({ style, onClick, legend }) => {
  return (
    <Container className='d-flex justify-content-center'>
      <h6
        style={style.footer}
        onClick={onClick}
        onMouseOver={e => (e.target.style.color = 'purple')}
        onMouseLeave={e => (e.target.style.color = 'black')}
      >
        {legend}
      </h6>
    </Container>
  )
}

export const ModalAuth = props => {
  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id='contained-modal-title-vcenter'
          style={props.style.modalTitleContainer}
          className='d-flex flex-column align-items-center'
        >
          <Image src={Logo} alt='Logo pinhunt' style={props.style.modalLogo} />
          <h2 style={props.style.modalTitle}> {props.title} </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        {props.footer === 'login' ? (
          <Footer
            style={props.style}
            onClick={props.onClick}
            legend='Not in Pinhunt yet? Sign Up'
          />
        ) : null}
      </Modal.Footer>
    </Modal>
  )
}
