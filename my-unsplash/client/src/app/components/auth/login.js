import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'

import { FormGroup } from '../../public/commons/formGroup'
import { loginUserSchema } from '../../public/commons/schemas'

export const Login = () => {
  const formValues = { email: '', password: '' }

  return (
    <div>
      <h4>LOGIN FORM</h4>
      <Formik
        initialValues={formValues}
        validationSchema={loginUserSchema}
        onSubmit={values => console.log(values)}
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
          </Form>
        )}
      </Formik>
    </div>
  )
}