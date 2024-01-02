import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const page = ({ params }: { params: Params }) => {
  console.log('params ------>', params)

  return <div>{params?.payment_uid}</div>
}

export default page
