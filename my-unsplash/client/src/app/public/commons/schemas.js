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
