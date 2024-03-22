"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { loginClick, signupClick } from '@/store/features/login-slice'
import { createPostClick } from '@/store/features/create-post-slice'
import { useAppDispatch } from '../store/store'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ProfilePicture from './ProfilePicture'

export default function Header(props:{session:Session | null, getStarted: boolean}) {
    const [loginClicked, setLoginClicked] = useState(false)
    const [signupClicked, setSignupClicked] = useState(false)
    const [createPostClicked, setCreatePostClicked] = useState(false)
    const [invitations, setInvitations] = useState<any[]>([])
    const [createPostHover, setCreatePostHover] = useState(false)
    const [user, setUser] = useState<any>()
    let ignoerUseEffect: boolean = false

    const router = useRouter()
    const dispatch = useAppDispatch()
    
    const handleCreatePostHover = ()=>{
      setCreatePostHover(true)
    }

    const handleCreatePostDisHover = ()=>{
      setCreatePostHover(false)
    }

    const handleLoginButton = ()=>{
      setLoginClicked(!loginClicked)
      dispatch(loginClick())
    }

    const handleSignupButton = ()=>{
      setSignupClicked(!signupClicked)
      dispatch(signupClick())
    }

    const handleCreatePostButton = ()=>{
      setCreatePostClicked(!createPostClicked)
      dispatch(createPostClick())
    }

    useEffect(()=>{      
      if (props.session) {
        if (!ignoerUseEffect) {
          setInvitations([])
          ignoerUseEffect = true
          const getUser = async()=>{
          const res = await fetch('/api/user', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await res.json()
          setUser(data)
  
          for (let i = 0; i < user.posts.length; i++) {
            const post = user.posts[i]
            
            for (let j = 0; j < post.chatGroup[0].invitations.length; j++) {
              const invitation = post.chatGroup[0].invitations[j];
              setInvitations((prevInvitations)=>[...prevInvitations, invitation])            
            }
          }
        }
        getUser()
        }    
      }
      
    }, [props.session])

    const handleAcceptInvitation = async (invitation: any)=>{
      const res = await fetch('/api/invitation/accept', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({invitation})
      })
      const parsedRes = await res.json()

      setInvitations(invitations.filter((item)=> item !== invitation))
    }

    const handleDeclineInvitation = async (invitation: any)=>{
      const res = await fetch('/api/invitation/decline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({invitation})
      })
      const parsedRes = await res.json()

      setInvitations(invitations.filter((item)=> item !== invitation))
    }

    return (
        <header className="flex flex-row sticky justify-between h-48 bg-secondary p-4 border-b-2 w-full border-b-gray-300 sm:h-28">
        <h2  onClick={()=>{router.push("/")}} className="cursor-pointer text-2xl font-bold leading-7 bg-gradient-to-r my-auto from-accent to-blue-300 bg-clip-text text-transparent sm:truncate sm:text-3xl mg mr-10">Developers Meeting </h2>
        <section className="flex mx-auto">
          
        </section>
        <div className="flex-col self-center lg:ml-4">
        {
          !props.session ? (
            <div className='inline-flex flex-col sm:flex-row'>
            <div className="ml-3">
              <button type="button" onClick={handleSignupButton} className={"btn inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 " + (props.getStarted ? "animate-bounce" : "")}>
                <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M21 12H2" />
                  <path d="M17 8l4 4-4 4" />
                  <path d="M17 16h2" />
                </svg>  
                  Signup
              </button>
            </div>
      
            <div className="ml-3 mt-3 sm:mt-0">
              <button type="button" onClick={handleLoginButton} className="btn inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span className="material-icons mr-1">&#xE87C;</span>
                Login
              </button>
            </div>
            </div>
          ) : (
          <div className="sm:ml-3 flex items-center justify-center">
            <div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mr-5'>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Invitations
                  <img width="12" height="12" src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="expand-arrow--v2"/>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                  {invitations &&
                          invitations.map((invitation: any)=>(
                            <li>
                              <div>
                                <div className="avatar" onClick={()=>{router.push("/profile/" + invitation.senderId)}}>
                                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer" >
                                    <img src={invitation.sender.profilePicture} />
                                  </div>
                                </div>
                                <div className='grid p-2'>
                                  <span className='text-sm text-blueGray-600  truncate'>{"Sender : " + invitation.sender.firstName}</span>
                                  <span className='text-sm text-blueGray-600  truncate'>{"To : " + invitation.chatGroup.name}</span>
                                </div>
                                <button type="button" className='btn-circle border-none hover:bg-accent items-center justify-center ' onClick={()=>{handleAcceptInvitation(invitation)}}>
                                  <img className='m-auto' width="24" height="24" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>
                                </button>
                                <button type="button" className='btn-circle border-none hover:bg-red-500 items-center justify-center flex' onClick={()=>{handleDeclineInvitation(invitation)}}>
                                  <img width="24" height="24" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-deny-ui-essentials-flatart-icons-outline-flatarticons.png" alt="external-deny-ui-essentials-flatart-icons-outline-flatarticons"/>
                                </button>
                              </div>
                            </li>
                          ))
                        }
                </ul>
              </div>
            </div>
            <div className='flex flex-row my-auto'>
              <div className='my-auto flex-col'>
                <button type="button" className='btn btn-box scale-110 shadow-lg flex flex-col border-black bg-white items-start justify-between ' onClick={handleCreatePostButton} onMouseEnter={handleCreatePostHover} onMouseLeave={handleCreatePostDisHover}>
                  <span className="material-symbols-outlined  text-neutral w-30 h-30 rounded-full m-auto">add_circle</span>
                </button>
              </div>
                <div className={'p-4 mt-10 bottom-0 right-0 shadow-2xl bg-base-200 rounded-2xl opacity-0 duration-500' + (createPostHover ? ' opacity-100' : " ")}>Share Post</div>
              
              <div className='mr-5 my-auto'>
                <ProfilePicture session={props.session}/>
              </div>
              <button type="button" onClick={()=>signOut()} className="btn my-auto inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <span className="material-icons mr-1">&#xE87C;</span>
                Log Out
              </button>
            </div>
          </div>
          )
        }
        </div>
      </header>
  )
}
