import Image from 'next/image'
import React from 'react'

type Props = {
  text: string
}

function RecievedBubble({text}: Props) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image
            width={200}
            height={100}
            alt="Tailwind CSS chat bubble component"
            src="https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg" />
        </div>
      </div>
      <div className="chat-header text-secondary-content">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">{text}</div>
      <div className="chat-footer opacity-50 text-secondary-content">
        Delivered
      </div>
    </div>
  )
}

export default RecievedBubble