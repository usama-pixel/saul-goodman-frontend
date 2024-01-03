'use client';
import React from 'react'

type Props = {
    text: string,
    id: number
}

function PrimartBtn({text, id}: Props) {
    const handleClick = (id: number) => {
      console.log({id})
    }
  return (
    <button
        onClick={() => handleClick(id)}
        className="btn btn-primary">{text}</button>
  )
}

export default PrimartBtn