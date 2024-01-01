
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type Props = {
    name: string,
    img: string,
    selected: boolean,
    onSelect: () => void
}

function Contact({name, img, selected, onSelect}: Props) {
    // const [selected, setSelected] = useState()
    useEffect(() => {
        console.log({selected});
    }, [selected])
  return (
    <div
        onClick={onSelect}
        className={`
            py-3
            px-2
            border-b-2
            border-gray-300
            hover:bg-teal-300
            flex
            flex-row
            align-middle
            cursor-pointer 
            ${selected ? 'bg-teal-500' : 'bg-cyan-300'}`
        }
    >
        <div className='avatar mr-5'>
            <div className='w-10 rounded-full'>
            <Image
                width={200}
                height={100}
                alt="Tailwind CSS Navbar component"
                src="https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg"
            />
            </div>
        </div>
        <div className='flex flex-col'>
            <span>{name}</span>
            <span className='text-gray-600'>Last msg</span>
        </div>
    </div>
  )
}

export default Contact