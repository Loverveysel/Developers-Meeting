"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { loginClick, signupClick } from '@/store/features/login-slice'
import { createPostClick } from '@/store/features/create-post-slice'
import { useAppDispatch } from '../store/store'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import ProfilePicture from './ProfilePicture'
import navigate from '@/lib/navigate'

export default function Header(props:{session:Session | null, getStarted: boolean}) {

    const [loginClicked, setLoginClicked] = useState(false)
    const [signupClicked, setSignupClicked] = useState(false)
    const [createPostClicked, setCreatePostClicked] = useState(false)
    const [invitations, setInvitations] = useState<any[]>([])
    let ignoerUseEffect: boolean = false

    const dispatch = useAppDispatch()
    
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

      if (!ignoerUseEffect) {
        ignoerUseEffect = true
        let user: any
        const getUser = async()=>{
        const res = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        user = await res.json()

        for (let i = 0; i < user.posts.length; i++) {
          const post = user.posts[i]
          console.log("i : ", i);
          
          for (let j = 0; j < post.chatGroup[0].invitations.length; j++) {
            const invitation = post.chatGroup[0].invitations[j];
            setInvitations((prevInvitations)=>[...prevInvitations, invitation])
            console.log("j: ", j);
            
          }
        }

      }
      getUser()
      }
      
    }, [])

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
        <header className="flex flex-row sticky justify-between max-h-28 min-h-28 bg-secondary p-4 border-b-2 border-b-gray-300 w-full">
        <h2 className="text-2xl font-bold leading-7 bg-gradient-to-r my-auto from-purple-400 to-pink-600 bg-clip-text text-transparent sm:truncate sm:text-3xl mg mr-10">Developers Meeting </h2>
        <section className="flex mx-auto">
          
        </section>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
        {
          !props.session ? (
            <div className='inline-flex flex-row items-center justify-center'>
            <div className="ml-3 hidden sm:block">
              <button type="button" onClick={handleSignupButton} className={"btn inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 " + (props.getStarted ? "animate-bounce" : "")}>
                <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M21 12H2" />
                  <path d="M17 8l4 4-4 4" />
                  <path d="M17 16h2" />
                </svg>  
                  Signup
              </button>
            </div>
      
            <div className="sm:ml-3">
              <button type="button" onClick={handleLoginButton} className="btn inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span className="material-icons mr-1">&#xE87C;</span>
                Login
              </button>
            </div>
            </div>
          ) : (
          <div className="sm:ml-3 flex p-4">
            <div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mr-5'>
              <ul className="menu bg-base-200 w-full rounded-box container shadow-xl">
                <li>
                  <details open>
                    <summary>Invitations</summary>
                    <ul className='flex-row items-center'>
                      {invitations &&
                        invitations.map((invitation: any)=>(
                          <li className='flex flex-row items-center justify-center'>
                            <div className="avatar" onClick={()=>{navigate("/profile/" + invitation.senderId)}}>
                              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer" >
                                <img src={invitation.sender.profilePicture} />
                              </div>
                            </div>
                            <span className='text-sm text-blueGray-600  truncate'>{"Sender : " + invitation.sender.firstName}</span>
                            <button type="button" className='btn-box h-12 w-12 border-none hover:bg-accent items-center justify-center flex' onClick={()=>{handleAcceptInvitation(invitation)}}>
                              <img className='m-auto' width="48" height="48" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>
                            </button>
                            <button type="button" className='btn-box h-12 w-12 border-none hover:bg-red-500 items-center justify-center flex' onClick={()=>{handleDeclineInvitation(invitation)}}>
                              <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-deny-ui-essentials-flatart-icons-outline-flatarticons.png" alt="external-deny-ui-essentials-flatart-icons-outline-flatarticons"/>
                            </button>
                            <button type="button"onClick={()=>{console.log(invitations)
                            }}></button>
                          </li>
                        ))
                      }
                    </ul>
                </details>
              </li>
            </ul>
            </div>
            <div className='my-auto w-30 h-30'>
              <button type="button" className='btn inline-flex bg-successs items-start justify-between rounded-badge' onClick={handleCreatePostButton}>
              <span className="material-symbols-outlined  text-gray-500 w-30 h-30 rounded-full m-auto">add_circle</span>
              </button>
            </div>
            
            <div className='m-5 my-auto'>
              <ProfilePicture session={props.session}/>
            </div>
            <button type="button" onClick={()=>signOut()} className="my-auto inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span className="material-icons mr-1">&#xE87C;</span>
              Log Out
            </button>
          </div>
          )
        }      
          
          <div className="relative ml-3 sm:hidden">
            <div className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="mobile-menu-item-0">Edit</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="mobile-menu-item-1">View</a>
            </div>
          </div>
        </div>
      </header>
  )
}
