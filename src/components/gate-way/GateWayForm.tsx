'use client'

import React, { useState } from 'react'
import CustomInput from '../custom-input'
import { Form, Formik } from 'formik'
import { useI18n } from '@/locales/client'
import * as Yup from 'yup'
import { IGateDetail } from '@/types'
import { createPayment } from '@/service/gateway.service'
import SvgIcon from '../svg-icon/SvgIcon'
import { useRouter } from 'next/navigation'

const GateWayForm = ({ data }: { data: IGateDetail }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const initialValue = {
    amount: data?.amount,
    name: '',
    phoneNumber: '',
    email: '',
    description: '',
  }

  const t = useI18n()

  const gateSchema = Yup.object().shape({
    amount: Yup.string().required(t('validations.required')),
    name: Yup.string().required(t('validations.required')),
    phoneNumber: Yup.string().required(t('validations.required')),
    email: Yup.string()
      .required(t('validations.required'))
      .email(t('validations.email')),
    description: Yup.string().required(t('validations.required')),
  })

  const handleForm = async (values: any) => {
    const body = {
      amount: values?.amount,
      payerInfo: {
        name: values?.name,
        phoneNumber: values?.phoneNumber,
        email: values?.email,
        description: values?.description,
      },
    }

    try {
      setLoading(true)
      const res = await createPayment(body, data?.uuid)
      setLoading(false)
      router.push(
        `/${data?.language?.toLowerCase()}/${res?.result?.paymentUid}`
      )
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <div className="w-[80%]">
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => {
          handleForm(values)
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
                  prepend={data?.currency?.name}
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
                  name="phoneNumber"
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
                  className={`w-full rounded-xl ${
                    loading ? '!bg-primary/70' : '!bg-primary'
                  } flex items-center justify-center gap-1 py-4 text-white font-semibold active:translate-y-1 transition-all`}
                  type="submit"
                  disabled={isSubmitting || loading}
                >
                  {loading ? <SvgIcon name="loading" color="#fff" /> : null}
                  <span>CheckOut</span>
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
