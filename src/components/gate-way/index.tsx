import React from 'react'
import GateWayForm from './GateWayForm'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import { IGateDetail } from '@/types'

const GateWay = ({ data }: { data: IGateDetail }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="absolute -top-[60px] left-[60px]">
        <Image width={110} height={23} src={Logo} alt="logo" />
      </div>
      <GateWayForm data={data} />
    </div>
  )
}

export default GateWay
