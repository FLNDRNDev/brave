import React from 'react'


interface layoutProps {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
         {children}
      </div>
    </>
  )
}

export default layout