'use client';
import React, { useState } from 'react'

type Props = {}

function Pagination({}: Props) {
    const [active, setActive] = useState(0)
  return (
    <div className="join">
        <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            checked={active === 0}
            onChange={(e) => {
                setActive(0)
            }}/>
        <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
            checked={active === 1}
            onChange={(e) => {
                setActive(1)
            }}
        />
        <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
            checked={active === 2}
            onChange={(e) => {
                setActive(2)
            }}
        />
        <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
            checked={active === 3}
            onChange={(e) => {
                setActive(3)
            }}
        />
    </div>
  )
}

export default Pagination