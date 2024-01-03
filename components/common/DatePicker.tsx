'use client';
import React, { useState } from 'react'
import ReactCalendar from 'react-calendar'
import { add, format } from 'date-fns'
import { CLOSING_TIME, INTERVAL, OPENING_TIME } from '@/constants/config';
type Props = {}
type DateType = {
    justDate: Date | null,
    dateTime: Date | null
}

function DatePicker({}: Props) {
    const [date, setDate] = useState<DateType>({
        dateTime: null,
        justDate: null
    })
    const getTimes = () => {
        if(!date.justDate) return
        const {justDate} = date
        const begining = add(justDate, {hours: OPENING_TIME})
        const end = add(justDate, {hours: CLOSING_TIME})
        const interval = INTERVAL
        const times = []
        for(let i = begining; i <= end; i = add(i, {minutes: interval})) {
            times.push(i)
        }
        return times
    }
    const times = getTimes()
    console.log(date.dateTime)
    const [activeIndex, setActiveIndex] = useState(-1)
  return (
    <div className='flex flex-col justify-center items-center'>
        {date.justDate ?
        (<div className='grid grid-cols-4 gap-4'>
            {times?.map((time, i) => (
                <div
                    key={`time-${i}`}
                    onClick={() => {
                        setDate(prev => ({...prev, dateTime: time}))
                        setActiveIndex(i)
                    }}
                    className={`rounded-lg py-2 px-4 bg-green-100 cursor-pointer ${activeIndex === i ? 'bg-green-500 text-white' : ''}`}
                >
                {format(time, 'kk:mm')}
                </div>
            ))}
        </div>) :
        (<ReactCalendar
            minDate={new Date()}
            className={'REACT-CALENDAR p-2'}
            view='month'
            onClickDay={(date) => {
                setDate((prev) => ({...prev, justDate: date}))
            }}
            showNavigation={true}
        />)}
        {date.dateTime && <button className='btn'>Book now</button>}
    </div>
  )
}

export default DatePicker