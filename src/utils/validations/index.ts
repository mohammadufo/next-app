import * as Yup from 'yup'

export const gateSchema = Yup.object().shape({
  title: Yup.string().required('this field is required'),
  link: Yup.string().required('this field is required'),
  address: Yup.string().required('this field is required'),
  address2: Yup.string().required('this field is required'),
  description: Yup.string().required('this field is required'),
})
