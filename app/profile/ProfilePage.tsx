import DatePicker from '@/components/common/DatePicker'
import Image from 'next/image'
import React from 'react'

type Props = {}

function ProfilePage({}: Props) {
  const img = 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
  const name = 'John Doe'
  const email = 'johndoe@gmail.com'
  const position = 'Attorney'
  return (
    <div className='p-10 flex flex-col justify-center gap-10 lg:flex-row items-center'>
      {/* column 1 */}
        <div className='flex flex-col'>
          <p className='mb-5'>Profile Image</p>
          <Image
            width={300}
            height={600}
            alt='Profile Pic'
            src={img}
            className='avatar rounded-lg bg-cover'
          />
          <p>Details</p>
          <div className='grid grid-cols-2'>
            <p>Name:</p>
            <p>{name}</p>
            <p>Email:</p>
            <p>{email}</p>
            <p>Position:</p>
            <p>{position}</p>
          </div>
        </div>
      {/* column 2 */}
        <div className=''>
          <DatePicker />
        </div>
      {/* column 3 */}
        <div className=''></div>
    </div>
  )
}

export default ProfilePage