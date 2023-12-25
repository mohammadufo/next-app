import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-bg_primary ">
      {children}
    </div>
  )
}

export default layout
