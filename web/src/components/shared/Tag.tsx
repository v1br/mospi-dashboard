import React from 'react'
import type { TagProps } from '../../types/types'

const Tag: React.FC<TagProps> = ({
    to, children
}) => {
  return (
    <a href={to} target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
      <div className='flex flex-col items-center justify-center w-fit py-1 px-2 bg-secondary rounded-2xl text-primary text-center'>
        {children}
      </div>
    </a>
  )
}

export default Tag