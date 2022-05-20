import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'

import { FormGroup } from '../../public/commons/formGroup'
import { loginUserSchema } from '../../public/commons/schemas'
import { loginUser } from '../../redux/features/authSlices'

export const Login = () => {
  const loginError = useSelector(state => state.auth.error)
  const dispatch = useDispatch()

  const formValues = { email: '', password: '' }

  return (
    <div>
      <h4>LOGIN FORM</h4>
      <Formik
        initialValues={formValues}
        validationSchema={loginUserSchema}
        onSubmit={values => dispatch(loginUser(values))}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <FormGroup
              label='Email address'
              type='email'
              name='email'
              placeholder='Enter email'
              values={values.email}
              handleChange={handleChange}
              touched={touched.email}
              errors={errors.email}
            />
            <FormGroup
              controlId='validationFormikPassword'
              label='Password'
              type='password'
              name='password'
              placeholder='Enter password'
              values={values.password}
              handleChange={handleChange}
              touched={touched.password}
              errors={errors.password}
            />
            <Button type='submit'> Sign in </Button>
            {loginError ? <h5>{loginError}</h5> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}
