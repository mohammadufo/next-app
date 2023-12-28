'use client'

import React from 'react'
import CustomInput from '../custom-input'
import { Form, Formik } from 'formik'
import { useI18n } from '@/locales/client'
import * as Yup from 'yup'

const GateWayForm = () => {
  const initialValue = {
    amount: '1234567890',
    name: '',
    mobile: '',
    email: '',
    description: '',
  }

  const t = useI18n()

  const gateSchema = Yup.object().shape({
    amount: Yup.string().required(t('validations.required')),
    name: Yup.string().required(t('validations.required')),
    mobile: Yup.string().required(t('validations.required')),
    email: Yup.string()
      .required(t('validations.required'))
      .email(t('validations.email')),
    description: Yup.string().required(t('validations.required')),
  })

  return (
    <div className="w-[80%]">
      <Formik
        initialValues={initialValue}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2))
        }}
        validationSchema={gateSchema}
      >
        {({ isSubmitting, values, setFieldValue, errors }) => {
          return (
            <Form>
              <div className="flex flex-col items-center justify-center w-full">
                <CustomInput
                  errors={errors}
                  placeHolder={t('hello')}
                  values={values}
                  name="amount"
                  prepend="USD"
                />
                <CustomInput
                  errors={errors}
                  placeHolder="Enter Payer's name"
                  values={values}
                  name="name"
                />
                <CustomInput
                  errors={errors}
                  placeHolder="Enter Mobile number"
                  values={values}
                  name="mobile"
                />
                <CustomInput
                  errors={errors}
                  placeHolder="Enter Email"
                  values={values}
                  name="email"
                />
                <CustomInput
                  errors={errors}
                  placeHolder="Description"
                  values={values}
                  name="description"
                  component="textarea"
                  row={3}
                />

                <button
                  className="w-full rounded-xl bg-primary py-4 text-white font-semibold active:translate-y-1 transition-all"
                  type="submit"
                  disabled={isSubmitting}
                >
                  payment
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default GateWayForm

{
  /* 
<Form>
<CustomInput
        name="title"
        value={}
        onChange={}
      />
      <CustomInput
        name="link"
        value={}
        onChange={}
      />
      <CustomInput
        name="address"
        value={}
        onChange={}
      />

      <button className="w-[60%] rounded-md bg-primary py-4" type="submit" disabled={isSubmitting}>
        submit
      </button>
    </Form> */
}
