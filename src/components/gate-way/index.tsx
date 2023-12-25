import React from 'react'
import GateWayForm from './GateWayForm'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'

const GateWay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="absolute top-[40px] left-[60px]">
        <Image width={110} height={23} src={Logo} alt="logo" />
      </div>
      <GateWayForm />
    </div>
  )
}

export default GateWay
