import React from 'react'

interface TagProps {
    children: React.ReactNode
}

const Tag: React.FC<TagProps> = ({
    children
}) => {
  return (
    <div className='flex flex-col items-center justify-center w-fit py-1 px-2 bg-secondary rounded-2xl text-primary text-center'>
      {children}
    </div>
  )
}

export default Tag