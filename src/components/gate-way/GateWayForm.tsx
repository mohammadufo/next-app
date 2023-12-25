'use client'

import React from 'react'
import CustomInput from '../custom-input'
import { Form, Formik, useFormik } from 'formik'
import { gateSchema } from '@/utils/validations'

const GateWayForm = () => {
  const initialValue = {
    title: '',
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
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="flex flex-col items-center justify-center w-full">
              <CustomInput
                placeHolder="Alaa Majed 💕"
                values={values}
                name="title"
              />
              <CustomInput
                placeHolder="Enter Payer's name"
                values={values}
                name="link"
              />
              <CustomInput
                placeHolder="Enter Mobile number"
                values={values}
                name="address"
              />
              <CustomInput
                placeHolder="Enter Email"
                values={values}
                name="address2"
              />
              <CustomInput
                placeHolder="Description"
                values={values}
                name="description"
                component="textarea"
                row={3}
              />

              <button
                className="w-full rounded-xl bg-primary py-4 text-white font-semibold"
                type="submit"
                disabled={isSubmitting}
              >
                payment
              </button>
            </div>
          </Form>
        )}
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
