"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import ChatGroups from '@/components/ChatGroups'
import Post from '@/components/Post'

export default function Page({ params }: { params: { id: string } }){
    const {data: session} = useSession()    
    const { id } = params

    const [user, setUser] = useState<any>()

    const [sessionUser, setSessionUser] = useState<any>()

    useEffect(()=>{
        const getUser = async()=>{
            const res = await fetch(`http://89.116.139.141:3000/api/user`)
            const data = await res.json()
            
            setSessionUser(data)
        }
        getUser()
    }, [])

    useEffect(()=>{
        const getUser = async()=>{
            const res = await fetch(`http://89.116.139.141:3000/api/user/${id}`)
            const data = await res.json()
            console.log(data);
            
            setUser(data)
        }
        getUser()
    }, [params.id])             
    
    if (user && session) {
        return (
            <main className="flex flex-row bg-base-100 items-start justify-between w-screen h-screen ">
                <div className='left-0 w-60'>
                    <Navbar user={sessionUser}/>
                </div>
                <div className='bg-base-100 mx-auto h-screen'>
                <section className="mt-48">
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0px)"}}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    </svg>
                    </div>
                </section>
                <section className="relative w-5/6 mx-auto py-16 bg-base-100">
                    <div className="mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                            <div className="mx-auto mb-5 rounded-full w-24 border-4 border-white  ">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.profilePicture} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                Connect
                                </button>
                            </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user?.posts.length}</span><span className="text-m text-blueGray-400">Idea</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="text-center left-0">
                            <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700">
                            {user?.firstName}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            {user?.country}
                            </div>
                        </div>
                        <div className='text-left items-start'>
                            <div className="mb-2 text-blueGray-600 mt-10 flex justify-start items-center">
                            <i className="fas fa-briefcase mr-2 my-auto text-lg text-blueGray-400"></i>
                            <div className='flex flex-row '>
                                {
                                user.domains.map((domain: string)=>(
                                    <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 ">{domain}</span>
                                ))
                                }
                            </div>
                            </div>
                            <div className="mb-2 text-blueGray-600  flex justify-start items-center">
                            <i className="fas fa-briefcase mr-2 my-auto text-lg text-blueGray-400"></i>
                            <div className='flex flex-row '>
                                {
                                user.programmingLanguages.map((domain: string)=>(
                                    <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 ">{domain}</span>
                                ))
                                }
                            </div>
                            </div>
                            <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{"Graduated by " + user?.educationExperience}
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                {user?.biography}
                               </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <div className='divider w-full bg-base-100'></div>
                <div className='left-1/4 w-3/4 flex mb-16 flex-wrap mx-auto '>
                    {user ?
                        user.posts.map((post:any)=>(
                            <div className='mt-5  ml-5 w-96'>
                                <Post post={post} user={user}/>
                            </div>
                        )) : <></>           
                    }
                </div>
                </div>
                <div className='fixed bottom-0 right-0'>
                  <ChatGroups session={session}/>
                </div>
            </main>
        )    
    }
    else{
        return (
            <div>Loading...</div>
        )
    }
    
}