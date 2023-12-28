import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) => {
  return (
    <div
      className={`w-screen min-h-screen flex flex-col items-center justify-center bg-bg_primary relative ${
        params?.locale === 'ar' || params?.locale === 'fa' ? 'rtl' : ''
      }`}
    >
      {children}
    </div>
  )
}

export default layout
