import { AlertEnum } from '@/utils/Enums'
import React, { useEffect, useState } from 'react'

type Props = {
    msg: string,
    show: boolean,
    type: AlertEnum
}

function Alert({msg, show, type}: Props) {
  const [className, setClassName] = useState('')
  useEffect(() => {
    setClassName(getClassName(type) as string)
    console.log({className})
  }, [type])
  const getClassName = (type: AlertEnum) => {
    if(type === AlertEnum.INFO) return 'alert-info'
    else if(type === AlertEnum.ERROR) return 'alert-error'
    else if(type === AlertEnum.SUCCESS) return 'alert-success'
    else if(type === AlertEnum.WARNING) return 'alert-warning'
  }
  return (
    <div
      style={{display: show ? 'grid': 'none'}}
      role="alert"
      className={`alert ${className}`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{msg}</span>
    </div>
  )
}

export default Alert