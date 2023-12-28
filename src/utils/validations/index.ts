import * as Yup from 'yup'

export const gateSchema = Yup.object().shape({
  amount: Yup.string().required('this field is required'),
  name: Yup.string().required('this field is required'),
  mobile: Yup.string().required('this field is required'),
  email: Yup.string()
    .required('this field is required')
    .email('your email is not valid'),
  description: Yup.string().required('this field is required'),
})
