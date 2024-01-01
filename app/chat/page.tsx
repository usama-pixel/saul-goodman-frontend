'use client';
import Contact from '@/components/chat/Contact';
import RecievedBubble from '@/components/chat/RecievedBubble'
import SentBubble from '@/components/chat/SentBubble'
import { useAppSelector } from '@/redux/store';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

type Props = {}
type Contact = {
    id: string | number,
    img?: string,
    email: string,
}
function page({}: Props) {
    const img = 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
    const [contacts, setContacts] = useState<Contact[]>()
    const [selectedContact, setSelectedContact] = useState(-1);
    const [messages, setMessages] = useState<string[]>([])
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const email = useAppSelector((state) => state.authReducer.value.email)
    const myId = useAppSelector((state) => state.authReducer.value.id)
    const socket = useAppSelector((state) => state.authReducer.value.socket)

    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [messages]);
    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_BASE_URL)
        axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/auth/users')
        .then(res => {
            setContacts(res.data?.map((d:Contact) => ({...d, img})))
            setIsLoading(false)
        })
        .catch(err => console.log(err))
        socket?.on('recieve_msg', (data): void => {
            console.log({data})
            setMessages(prev => ([...prev, data]))
        })
    }, [])
    const handleContactSelect = (contact: Contact) => {
        console.log(contact.id);
        setSelectedContact(+contact.id)
    }
    const handleSend = () => {
        // console.log({selectedContact, myId, message})
        socket?.emit('send_msg', {message, to: selectedContact, from: myId})
    }
  return (
    <div className='w-1/2 min-w-fit h-96 shadow-xl mt-5 ml-auto mr-auto bg-secondary p-5 rounded-2xl flex flex-row'>
        <div className={`w-80 rounded-t-lg rounded-b-lg h-full overflow-y-scroll scroll-m-0 ${isLoading ? 'flex flex-col justify-center items-center': ''}`}>
            {/* <span className="loading loading-dots loading-md text-warning ml-auto mr-auto"></span> */}
            {isLoading ?
            <span className="loading loading-dots loading-md text-warning ml-auto mr-auto"></span> :
            contacts?.map((contact: Contact) => (
                <Contact
                    key={contact.id}
                    img={contact.img as string}
                    name={contact.email}
                    selected={contact.id === selectedContact}
                    onSelect={() => handleContactSelect(contact)}
                />
            ))}
        </div>
        <div className='flex flex-col w-full ml-5'>
            <div className='h-full overflow-y-scroll pr-5'>
                {messages?.map((msg: string) => (
                    <SentBubble text={msg} />
                ))}
                {/* <SentBubble text='You were the Chosen One!' />
                <RecievedBubble text='I hate you!' />
                <SentBubble text='You were the Chosen One!' />
                <RecievedBubble text='I hate you!' />
                <SentBubble text='You were the Chosen One!' />
                <RecievedBubble text='I hate you!' /> */}
                <div ref={messagesEndRef} />
            </div>
            <div className='flex justify-center mt-auto'>
                <input
                    type="text"
                    placeholder="Message"
                    className="input input-bordered input-secondary w-full max-w-xl"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                <button
                    onClick={handleSend}
                    className='btn btn-accent ml-5'
                >Send</button>
            </div>
        </div>
    </div>
  )
}

export default page