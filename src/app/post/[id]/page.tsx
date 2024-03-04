"use client"
import React, {useEffect, useState} from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import ChatGroups from '@/components/ChatGroups'
import Post from '@/components/Post'

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params

    const [user, setUser] = useState<any>()
    const {data: session} = useSession()
    const [post, setPost] = useState<any>()

    useEffect(()=>{
        const getUser = async()=>{
            const res = await fetch(`http://localhost:3000/api/user`)
            const data = await res.json()
            setUser(data)
        }
        getUser()
    }, [])

    useEffect(()=>{
        const getPost = async()=>{
            const res = await fetch(`http://localhost:3000/api/post/${id}`)
            const data = await res.json()
            console.log(data)
            
            
            if (!res.ok) {
                throw new Error(data?.error || 'Something went wrong')
            }
            
            setPost(data)
        }
        getPost()
    }, [params.id])


  if (user && post && session) {
    return (
        <main className='flex flex-row bg-base-100 items-start justify-between w-screen h-screen' >
            <div className='left-0 w-40'>
                <Navbar user={user}/>
            </div>

            <div className='flex flex-col m-auto items-center justify-between w-full h-full'>
                <div className='w-full m-auto'>
                <Post post={post} user={user}/>

                </div>
            </div>

            <div className='fixed bottom-0 right-0'>
                <ChatGroups session={session}/>
            </div>  
        </main>
      )
  } else{
    return (
        <div className='bg-base-100 text-black font-semibold text-2xl m-auto items-center justify-center '>Idea not found...</div>
    )
  }
}
