import React from 'react'

interface DescriptionProps {
    children: React.ReactNode
}

const Description: React.FC<DescriptionProps> = ({
    children
}) => {
  return (
    <div className='flex flex-col w-8/9 m-4 py-4 gap-4 rounded-2xl text-secondary text-sm/6 text-justify'>
      {children}
    </div>
  )
}

export default Description