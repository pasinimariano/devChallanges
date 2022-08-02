import * as Yup from 'yup'

export const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .max(255, 'The maximum number of characters is 255')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'The password must have at least one uppercase letter, one lowercase letter and one number.'
    )
    .min(8, 'The minimum number of characters is 8')
    .max(20, 'The maximum number of characters is 20')
    .required('Password is required')
})

export const createUserSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'The minimum number of characters is 3')
    .max(50, 'The maximum number of characters is 50')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required('Firstname is required'),
  lastname: Yup.string()
    .min(2, 'The minimum number of characters is 2')
    .max(50, 'The maximum number of characters is 50')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required('Lastname is required'),
  email: Yup.string()
    .email('Invalid email')
    .max(255, 'The maximum number of characters is 255')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'The password must have at least one uppercase letter, one lowercase letter and one number.'
    )
    .min(8, 'The minimum number of characters is 8')
    .max(20, 'The maximum number of characters is 20')
    .required('Password is required')
})

export const createBoardSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'The minimum number of characters is 3')
    .max(50, 'The maximum number of characters is 50')
    .required('Title is required')
})
