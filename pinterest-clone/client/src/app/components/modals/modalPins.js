import React from 'react'
import { Modal, Container, Image, Button } from 'react-bootstrap'

import Logo from '../../assets/logoph.png'

export const Footer = ({ style, option }) => {
  return (
    <Container className='d-flex justify-content-around'>
      <Button> Cancel </Button>
      <Button> Create </Button>
    </Container>
  )
}

export const ModalPins = ({
  show,
  onHide,
  title,
  body,
  footer,
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
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> {body} </Modal.Body>
      <Modal.Footer>
        {footer === 'newBoard' ? <Footer style={style} option='login' /> : null}
      </Modal.Footer>
    </Modal>
  )
}
