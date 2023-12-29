'use client';
import React, { useState } from 'react'
import Card from '../common/Card'

type Props = {}

function Featured({}: Props) {
    const [active, setActive] = useState(0)
    const data = [
        {
            title: 'MyTitle',
            description: 'Hello world',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
        },
        {
            title: 'Tiot',
            description: 'Yoyo',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
        },
        {
            title: 'Tiot',
            description: 'Yoyo',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
        },
        {
            title: 'Tiot',
            description: 'Yoyo',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
        },
        {
            title: 'Tiot',
            description: 'Yoyo',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
        },
    ]
  return (
    <div>
        <p className='text-2xl font-medium mb-5'>Our Top Lawyers</p>
        <div className='flex flex-wrap justify-center'>
            {data.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} imgUrl={item.imgUrl} />
            ))}
        </div>
        <div style={{width: 'fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
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

        </div>
    </div>
  )
}

export default Featured