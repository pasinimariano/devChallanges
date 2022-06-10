import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Formik } from 'formik'

import { FormGroup } from '../../public/commons/formGroup'
import { loginUserSchema } from '../../public/commons/schemas'
import { loginUser } from '../../redux/features/authSlice'
import { TermsContainer } from './terms'

export const Login = ({ loginValues, serverError, dispatch, style }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <Formik
        initialValues={loginValues}
        validationSchema={loginUserSchema}
        onSubmit={values => dispatch(loginUser(values))}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            style={style.formContainer}
            className='d-flex flex-column align-items-center'
          >
            <FormGroup
              type='email'
              name='email'
              placeholder='Email'
              values={values.email}
              handleChange={handleChange}
              touched={touched.email}
              errors={errors.email}
              style={style}
            />
            <FormGroup
              controlId='validationFormikPassword'
              type='password'
              name='password'
              placeholder='Password'
              values={values.password}
              handleChange={handleChange}
              touched={touched.password}
              errors={errors.password}
              style={style}
            />
            <Container className='d-flex flex-column align-items-center'>
              <Button type='submit' style={style.formButton(false, true)}>
                Log in
              </Button>
              <h5 style={style.or}>OR</h5>
              <Button style={style.formButton(true, false)}>Google</Button>
              {serverError ? (
                <h5 style={style.showError}>{serverError}</h5>
              ) : null}
            </Container>
          </Form>
        )}
      </Formik>
      <TermsContainer style={style} />
    </div>
  )
}
