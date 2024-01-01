"use client";
import React, { useState } from 'react'
import Alert from '@/components/common/Alert';
import axios from 'axios';
import { io } from 'socket.io-client';
import { AlertEnum } from '@/utils/Enums';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/features/authSlice';

type Props = {}

function Login({}: Props) {
    const socket = io(process.env.NEXT_PUBLIC_BASE_URL as string)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertMsg, setAlertMsg] = useState('')
    const [alertType, setAlertType] = useState<AlertEnum>(AlertEnum.INFO)
    // let alertType = AlertEnum.INFO
    const [show, setShow] = useState(false)
    const [showBtn, setShowBtn] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch()
    // useEffect(() => {
    // }, [])
    const handleSubmit = () => {
        setShowBtn(false)
        axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/auth/login', {
            email,
            password
        }).then(res => {
            const id = res.data?.user?.id
            dispatch(login({
                id,
                socket,
                email: res.data?.user?.email,
            }))
            // sessionStorage.setItem('id', id)
            socket.emit('register', {id})
            setAlertType(AlertEnum.SUCCESS)
            setAlertMsg('Login Successful')
            setShow(true)
            setShowBtn(true)
            setTimeout(() => {
                setShow(false)
            }, 5000)
            router.push('/home')
        }).catch(err => {
            setAlertType(AlertEnum.ERROR)
            setAlertMsg(err?.response?.data?.message);
            setShow(true);
            setShowBtn(true)
            setTimeout(() => {
                setShow(false)
            }, 5000)
        })
    }
    // const handleSubmit = () => {
    //     setAlertType(AlertEnum.ERROR)
    //     setShow(true)
    // }
    // const handleSubmit2 = () => {
    //     setAlertType(AlertEnum.SUCCESS)
    //     setShow(true)
    // }
  return (
    <>
    <Alert msg={alertMsg} show={show} type={alertType} />
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
            disabled={!showBtn}
            onClick={handleSubmit} className="btn btn-neutral">
        {
            !showBtn ? 
            <span className="loading loading-infinity loading-lg"></span> :
            'Login'
        }
        </button>
        {/* <button onClick={handleSubmit2}>check</button> */}
    </div>
    </>
  )
}

export default Login