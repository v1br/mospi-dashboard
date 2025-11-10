import React from 'react'
import type { HeadingProps } from '../../types/types'

const Heading: React.FC<HeadingProps> = ({
    children
}) => {
  return (
    <h1 className='text-secondary text-4xl/12 font-bold mx-4 my-2'>
      {children}
    </h1>
  )
}

export default Heading