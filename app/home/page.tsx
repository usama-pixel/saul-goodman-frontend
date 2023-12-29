import Carousel from '@/components/home/Carousel'
import Featured from '@/components/home/Featured'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
      <Carousel />
      <div className='p-8'>
        <Featured />
      </div>
    </div>
  )
}

export default page