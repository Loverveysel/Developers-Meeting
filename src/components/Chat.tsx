import React, { useState, useEffect, useRef } from 'react'

export default function Chat(props: { group: any, user: any }) {
    const [chatInput, setChatInput] = useState<string>()
    const messageContainerRef = useRef<HTMLDivElement>(null)

    const group = props.group

    const handleChatInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatInput(e.target.value)
    }

    const handleChatInputSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            chatGroupId: group.id,
            content: chatInput,
        }

        const res = await fetch('http://89.116.139.141:3000/api/messages', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const message = await res.json()

        const socketRes = await fetch("http://89.116.139.141:3000/api/socket/messages/" + message.id, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
        })

        setChatInput('')
    }

    const messageTime = (date: string)=>{
        const messageDate = new Date(date)
        const now = new Date()

        const diff = now.getTime() - messageDate.getTime()  
        const daydiff = diff / (1000 * 60 * 60 * 24);           

        if (daydiff > 365) {
            return (daydiff/365).toPrecision(1).toString() + " year"
        }else if (daydiff > 30) {
            return (daydiff/30).toPrecision(1).toString() + " month"
        }else if (daydiff > 7) {
            return (daydiff/7).toPrecision(1).toString() + " week"
        }else if (daydiff > 1) {
            return (daydiff).toPrecision(1).toString() + " day"
        }else {
            return messageDate.getHours() + ":" + messageDate.getMinutes()
        }

    }

    useEffect(() => {
        if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
        }
    }, [group.messages])

    return (
    <div className='flex flex-col border-solid items-center justify-end border-success border-2 rounded-2xl bg-chat w-full'>
        <div className='rounded-3xl p-5 max-h-72 overflow-y-auto ' ref={messageContainerRef}>
            {group.messages.map((message: any) => (
                <div
                key={message.id}
                className={`chat ${message.senderId !== props.user.id ? 'chat-start' : 'chat-end'} p-5`}
                >
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                    <img alt='Profile' src={message.sender.profilePicture} />
                    </div>
                </div>
                <div className='chat-header font-medium'>
                    {message.sender.firstName}
                    <time className='text-xs font-bold opacity-70'>{messageTime(message.createdAt)}</time>
                </div>
                <div className='chat-bubble bg-neutral '>{message.content}</div>
                <div className='chat-footer opacity-50'>{message.senderId !== props.user.id ? 'Delivered' : 'Seen at 12:46'}</div>
                </div>
            ))}
    </div>
        <div className='flex-row items-start justify-normal bottom-2 p-2'>
            <form action='' onSubmit={handleChatInputSubmit} className='flex'>
                <input
                    type='text'
                    value={chatInput}
                    onChange={handleChatInput}
                    placeholder='Type here'
                    className='input w-full max-w-xs border-none rounded-3xl bg-slate-300'
                />
                <button type="submit" className='bg-white border-solid border-2 border-warning m-auto rounded-btn justify-center items-center -bottom-20'>
                <img width="48" height="48" src="https://img.icons8.com/hatch/64/sent.png" alt="sent"/>
                </button>
            </form>
        </div>
        </div>
    )
}
