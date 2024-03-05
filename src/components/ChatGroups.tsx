import { Session } from 'next-auth'
import React, { useEffect, useRef, useState } from 'react'
import Chat from './Chat'
import { io, Socket } from 'socket.io-client'

export default function ChatGroups(props: { session: Session }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [groups, setGroups] = useState<any[]>([])
  const [selectedGroup, setSelectedGroup] = useState<any | null>(null)
  const [user, setUser] = useState<any | null>(null)
  const [socket, setSocket] = useState<Socket | null>(null)
  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number>(0)
  const groupsRef = useRef<HTMLDivElement>(null)
  
  const socketInitializer = () => {
    const newSocket = io("", {
      path: "/api/socket/io",
      addTrailingSlash: false,
      transports: ["polling", "websocket"],
    })

    newSocket.on('connect', () => {
      console.log("socket connected")
    })

    newSocket.on('try', () => {
      console.log("tried")
    })

    console.log(socket);
    
    return newSocket
  }

  const handleOpenCloseButton = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectGroupButton = (index: number) => {
    setSelectedGroup(groups[index])
    setSelectedGroupIndex(index)
  }

  useEffect(() => {
    const getGroups = async () => {
      try {
        const res = await fetch('/api/user', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const user = await res.json()
        setUser(user)
        const chatGroups = user.chatGroups.map((ChatGroupUser: any) => ChatGroupUser.chatGroup)

        setGroups(chatGroups)
        if (chatGroups.length > 0) {
          setSelectedGroup(chatGroups[0])
        }
      } catch (error) {
        console.error('Error fetching groups:', error)
      }
    }

    getGroups()
  }, [props.session])


  useEffect(()=>{
    const newSocket = socketInitializer()
    setSocket(newSocket)

    return () => {
      if (newSocket) {
        newSocket.disconnect()
      }
    }

  }, [groups])

  

  useEffect(() => {
    if (socket) {          
      groups.forEach((group, index) => {
        const key = `message:${group.id || " "}`
        console.log(key);
        
        socket.on(key, (message) => {
          console.log("message came")
          const newGroups = [...groups]
          const newGroup = { ...newGroups[index] }
          newGroup.messages = [...newGroup.messages, message]
          newGroups[index] = newGroup
          setGroups(newGroups)
          setSocket(socket)
        })

        setTimeout(() => {
          setSelectedGroup(groups[selectedGroupIndex])
        }, 100)
      })
    }
  }, [groups, socket])

  useEffect(() => {
    if (groupsRef.current) {
    groupsRef.current.scrollTop = groupsRef.current.scrollHeight
    }
}, [groups])

  if (groups) {
    return (<>
    
        <div className='bg-success rounded-3xl p-2 shadow-lg z-50 max-w-xl max-h-58'>
          <div className={`my-auto border-neutral border-2 border-solid w-8 h-8 rounded-full inline-flex items-center justify-between bg-base-100 ${!isOpen ? 'm-auto rotate-180 hover:cursor-pointer' : ' justify-start hover:cursor-pointer'}`} onClick={handleOpenCloseButton}>
            <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/expand-arrow--v1.png" alt=""/>
          </div>
          {isOpen && (
            <>
              <div className="divider lg:divider-vertical m-0"></div>
              <div className='flex flex-row min-h-48'>
                <div className='flex flex-col rounded-2xl h-full '>
                  {groups.map((group: any, index: number) => (
                    <button key={group.id} className='btn rounded-none flex flex-col items-start justify-center h-16' onClick={() => { handleSelectGroupButton(index) }}>
                      <span className='justify-start'>{group.name}</span>
                        {
                          group.messages.length > 0 && (
                            <div className='flex flex-row'>
                              <span className='opacity-80 '>{group.messages[group.messages.length - 1].sender.firstName + " : "}</span>
                              <span className='opacity-50'>{group.messages[group.messages.length - 1].content}</span>
                            </div>
                          )
                        }

                    </button>
                  ))}
                </div>
                <div className="divider lg:divider-horizontal "></div>
                <div className='w-2/3'>
                  {selectedGroup && (<Chat group={selectedGroup} user={user}></Chat>)}
                </div>
              </div>
            </>
          )}
        </div>
        </>
    )
  }

  return null
}
