import React from 'react'
import SvgIcon from '../svg-icon/SvgIcon'

const Icons = ({ IconArray }: { IconArray: string[] }) => {
  return (
    <div className="flex items-center gap-2">
      {IconArray.map((item, index) => (
        <SvgIcon name={item} key={index} />
      ))}
    </div>
  )
}

export default Icons
