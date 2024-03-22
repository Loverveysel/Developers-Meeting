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

        const res = await fetch('/api/messages', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        const message = await res.json()

        const socketRes = await fetch("/api/socket/messages/" + message.id, {
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
        //How to align scroll bar to right ? 
        if (messageContainerRef.current) {
            messageContainerRef.current.scroll({
                left: 100,
                behavior: 'smooth',
                top: 0,
            })    
        }
        

        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
        }
    }, [group.messages])

    return (
    <div className='flex flex-col border-solid items-center justify-end self-end justify-self-end  border-success border-2 rounded-2xl bg-chat h-full w-full'>
        <div className='rounded-3xl p-5 min-h-72 max-h-72 h-72 overflow-y-auto w-full' ref={messageContainerRef} style={{WebkitAlignItems: 'end', WebkitAlignSelf: 'end', WebkitBorderRadius: 25, WebkitBorderBeforeColor: "blue"}}>
            {group.messages.map((message: any) => (
                <div className={'flex ' + (message.senderId !== props.user.id ? 'flex-row' : 'flex-row-reverse')}>
                    <div className='chat-image avatar'>
                        <div className='w-10 rounded-full'>
                        <img alt='Profile' src={message.sender.profilePicture} />
                        </div>
                    </div>
                    <div
                    key={message.id}
                    className={`chat w-full ${message.senderId !== props.user.id ? 'chat-start' : 'chat-end'} p-2`}
                    >

                        <div className={'chat-bubble bg-warning p-5 max-w-60 flex'}>
                            <div className='flex flex-col'>
                                <div className={'chat-header text-base-300 font-bold  text-start ' + (message.senderId !== props.user.id ? '' : 'hidden')}>
                                    {message.sender.firstName}
                                </div>
                                <article className={'text-white max-w-48 text-wrap break-words ' + (message.senderId !== props.user.id ? 'left' : 'right')}>{message.content}</article>
                            </div>
                            
                        <time className='absolute text-xs bottom-1 right-1 font-bold opacity-70 self-end'>{messageTime(message.createdAt)}</time>
                        </div>
                    </div>
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
