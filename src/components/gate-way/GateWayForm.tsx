'use client'

import React from 'react'
import CustomInput from '../custom-input'
import { Form, Formik, useFormik } from 'formik'
import { gateSchema } from '@/utils/validations'

const GateWayForm = () => {
  const initialValue = {
    title: '1234567890',
    link: '',
    address: '',
    address2: '',
    description: '',
  }

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
                  placeHolder="mamad"
                  values={values}
                  name="title"
                  prepend="USD"
                />
                <CustomInput
                  errors={errors}
                  placeHolder="Enter Payer's name"
                  values={values}
                  name="link"
                />
                <CustomInput
                  errors={errors}
                  placeHolder="Enter Mobile number"
                  values={values}
                  name="address"
                />
                <CustomInput
                  errors={errors}
                  placeHolder="Enter Email"
                  values={values}
                  name="address2"
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
