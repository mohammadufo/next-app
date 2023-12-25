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
}

const CustomInput = ({
  name,
  values,
  type,
  placeHolder,
  component,
  row,
}: IProp) => {
  const [active, setActive] = useState(false)
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
      <div className="flex flex-col ">
        <Field
          component={component}
          rows={row}
          name={name}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          type={type || 'text'}
          placeholder={!active && placeHolder}
          className="rounded-xl p-3 border border-border"
        />
        <div className="text-sm text-red-400 ms-2">
          <ErrorMessage name={name} />
        </div>
      </div>
    </div>
  )
}

export default CustomInput
