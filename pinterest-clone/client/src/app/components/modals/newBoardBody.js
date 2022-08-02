import React, { useState, useEffect } from 'react'
import { Container, Image, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'

import { createBoardSchema } from '../../public/commons/schemas'

export const NewBoardBody = ({
  newBoardValues,
  createBoard,
  createBoardValues,
  owner,
  token,
  setModalShow,
  BootstrapStyles
}) => {
  const [hover, setHover] = useState(false)

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <Image src={newBoardValues.url} style={BootstrapStyles.newBoardImg} />
      <h2 style={BootstrapStyles.newBoardTitle}> Title </h2>
      <Formik
        initialValues={createBoardValues}
        validationSchema={createBoardSchema}
        onSubmit={values => createBoard(values, owner, token)}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            style={BootstrapStyles.formContainer}
            className='d-flex flex-column align-items-center justify-content-center'
          >
            <Form.Group style={BootstrapStyles.formCreateBoardContainer}>
              <Form.Control
                type='text'
                name='title'
                placeholder='Like "Dinners" or "Fashion"'
                value={values.title}
                onChange={handleChange}
                isValid={touched.title && !errors.title}
                isInvalid={!!errors.title}
                style={BootstrapStyles.formCreateBoard}
              />
              <Form.Control.Feedback
                type='invalid'
                style={BootstrapStyles.showError}
              >
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>
            <Container className='d-flex justify-content-around'>
              <Button
                style={BootstrapStyles.cancelBoardButton}
                onClick={() => setModalShow(false)}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                style={BootstrapStyles.createBoardButton(hover)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Create
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
