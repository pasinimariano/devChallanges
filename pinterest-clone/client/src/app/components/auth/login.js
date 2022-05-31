import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'

import { FormGroup } from '../../public/commons/formGroup'
import { loginUserSchema } from '../../public/commons/schemas'
import { loginUser } from '../../redux/features/authSlice'

export const Login = ({ loginValues, setRender, serverError, dispatch }) => {
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ backgroundColor: 'pink', height: '100%' }}
    >
      <h3>Log in to see more</h3>
      <Formik
        initialValues={loginValues}
        validationSchema={loginUserSchema}
        onSubmit={values => dispatch(loginUser(values))}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <FormGroup
              type='email'
              name='email'
              placeholder='Email'
              values={values.email}
              handleChange={handleChange}
              touched={touched.email}
              errors={errors.email}
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
            />
            <Button type='submit'> Sign in </Button>
            {serverError ? <h5>{serverError}</h5> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}
