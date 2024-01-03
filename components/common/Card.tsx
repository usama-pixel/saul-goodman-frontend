import Image from 'next/image'
import React from 'react'
import PrimartBtn from './PrimartBtn'

type Props = {
    userId: number,
    title: string,
    description: string,
    imgUrl: string
}

function Card({title, description, imgUrl, userId}: Props) {
  return (
    <div className="card w-80 bg-base-300 shadow-xl mr-4 ml-4 mb-8">
        <figure className="px-10 pt-10">
            <Image width={200} height={100} src={imgUrl} alt="Profile pic" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
                <PrimartBtn id={userId} text='View full profile' />
            </div>
        </div>
    </div>
  )
}

export default Card