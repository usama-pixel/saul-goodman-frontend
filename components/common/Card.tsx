import React from 'react'

type Props = {
    title: string,
    description: string,
    imgUrl: string
}

function Card({title, description, imgUrl}: Props) {
  return (
    <div className="card w-80 bg-base-300 shadow-xl mr-8 mb-8">
        <figure className="px-10 pt-10">
            <img src={imgUrl} alt="Profile pic" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
                <button className="btn btn-primary">View full profile</button>
            </div>
        </div>
    </div>
  )
}

export default Card