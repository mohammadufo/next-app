'use client'

import { ErrorMessage, Field } from 'formik'
import React, { useState } from 'react'

interface IProp {
  name: string
  values: any
  type?: string
  component?: string
  row?: number
  placeHolder: string
  prepend?: string
  errors: any
}

const CustomInput = ({
  name,
  values,
  type,
  placeHolder,
  component,
  row,
  prepend,
  errors,
}: IProp) => {
  const [active, setActive] = useState(false)

  const isErrorActive = Boolean(
    Object?.keys(errors).find((item: string) => item === name)
  )

  return (
    <div className="relative w-full pb-4">
      <span
        className={`bg-white absolute text-gray-400 left-[12px] px-1 transition-all rounded-xl ${
          !active && 'z-[-1]'
        } ${
          active
            ? 'top-[-13px]'
            : values[name]?.length > 0
            ? 'top-[-13px]'
            : 'top-[12px]'
        }`}
      >
        {placeHolder}
      </span>
      <div className="flex flex-col w-full">
        <div className={prepend ? 'flex items-center justify-between' : ''}>
          <Field
            component={component}
            rows={row}
            name={name}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            type={type || 'text'}
            placeholder={!active ? placeHolder : ''}
            className={`${
              prepend ? 'rounded-s-xl' : 'rounded-xl'
            } p-3 border w-full ${
              isErrorActive ? 'border-error' : 'border-border'
            }`}
          />

          {prepend && (
            <div className="py-3 px-4 border border-border rounded-e-xl bg-white">
              {prepend}
            </div>
          )}
        </div>

        {isErrorActive ? (
          <div className="text-sm text-error ms-2 active-error">
            <ErrorMessage name={name} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CustomInput
