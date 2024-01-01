"use client";
import Alert from '@/components/common/Alert';
import { AlertEnum } from '@/utils/Enums';
import axios from 'axios';
import React, { useState } from 'react'

type Props = {}

function Signup({}: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertMsg, setAlertMsg] = useState('')
    const [show, setShow] = useState(false)

    // useEffect(() => {
    // }, [])
    const handleSubmit = () => {
        axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/auth/signup', {
            email,
            password
        }).then(res => {
            console.log(res);
        }).catch(err => {
            setAlertMsg(err?.response?.data?.message);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 5000);
            console.log('Yoooo',err);
        })
    }
  return (
    <>
    <Alert msg={alertMsg} show={show} type={AlertEnum.ERROR} />
    <div className='w-80 ml-auto mr-auto mt-10 bg-base-300 flex flex-col justify-center items-center'>
        <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            className="input input-bordered input-primary w-full max-w-xs mb-10"
        />
        <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs mb-10"
        />
        <button
            disabled={show}
            onClick={handleSubmit} className="btn btn-neutral">
        {
            show ? 
            <span className="loading loading-infinity loading-lg"></span> :
            'Signup'
        }
        </button>
    </div>
    </>
  )
}

export default Signup