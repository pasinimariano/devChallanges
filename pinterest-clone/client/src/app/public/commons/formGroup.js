import React from 'react'
import { Form } from 'react-bootstrap'

export const FormGroup = ({
  controlId,
  label,
  type,
  name,
  placeholder,
  values,
  handleChange,
  touched,
  errors,
  style
}) => {
  return (
    <Form.Group controlId={controlId} style={style.formInput}>
      <Form.Label> {label} </Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={values}
        onChange={handleChange}
        isValid={touched && !errors}
        isInvalid={!!errors}
        style={style.form}
      />
      <Form.Control.Feedback type='invalid'>{errors}</Form.Control.Feedback>
    </Form.Group>
  )
}
