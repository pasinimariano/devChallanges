import React from 'react'
import { Modal, Image } from 'react-bootstrap'

import Logo from '../../assets/logoph.png'

export const ModalPins = ({ show, onHide, title, body, style }) => {
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
    </Modal>
  )
}
