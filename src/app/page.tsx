"use client"
import React, { useEffect, useState, useRef, MutableRefObject }  from 'react'
import { useAppSelector, useAppDispatch } from '../store/store'
import { loginClick, signupClick } from '@/store/features/login-slice'
import { signOut, useSession } from 'next-auth/react'
import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'
import SignupForm from '@/components/SignupForm'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'
import ChatGroups from '@/components/ChatGroups'
import Footer from '@/components/Footer'
import softwareDevelopmentCategories from '@/lib/software-development-categories'
import Alert from '@/components/Alert'
import { useRouter } from 'next/navigation'
import useIsVisible from '@/hooks/useIsVisible'

export default function HomePage() {
    const router = useRouter()
    const {status, data: session} =  useSession() 

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const dispatch = useAppDispatch()
    
    const loginButtonClicked = useAppSelector((state)=>{return state.loginSlice.value.loginShow})

    const signupButtonClicked = useAppSelector((state)=>{return state.loginSlice.value.signupShow})
  
    const createPostButtonClicked = useAppSelector((state)=>{return state.createPostSlice.value.clicked})

    const isAlert = useAppSelector((state)=>{return state.alertSlice.value.alert})
    

    const [getStartedClicked, setGetStartedClicked] = useState<boolean>(false)
    const ref1 = useRef<HTMLDivElement>(null)
    const isVisible1 = useIsVisible(ref1)

    const ref2 = useRef<HTMLDivElement>(null)
    const isVisible2 = useIsVisible(ref2)

    const ref3 = useRef<HTMLDivElement>(null)
    const isVisible3 = useIsVisible(ref3)

    const handleOpenLoginandSignupOutsideClick = ()=>{
      loginButtonClicked ? dispatch(loginClick()) : 1
      signupButtonClicked ? dispatch(signupClick()) : 1
      getStartedClicked ? setGetStartedClicked(false) : 1
    }

    const handleGetStartedButton = ()=>[
      setGetStartedClicked(!getStartedClicked)
    ]

    const handleSelectedCategories = (events: any)=>{
      const category = events.target.textContent

      if (selectedCategories.includes(category)) {
      }else{
        setSelectedCategories([...selectedCategories, category])
      }
    }

    const handleUnSelectedCategories = (category: string)=>{
      const newCategories = selectedCategories.filter((item)=> item !== category)
      setSelectedCategories(newCategories)
    }

    useEffect(()=>{
      if (selectedCategories.length > 0) {
        console.log(selectedCategories)
      }
    }, [selectedCategories])

    useEffect(()=>{
      const getUser = async()=>{
        const res = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        if (!res.ok) {
          signOut()
        }else{
          const user = await res.json()
        }
      }

      if (session) {
        getUser()        
      }
    }, [session])
    
  return (
    <>
    {!session ? (
      
    <main title='loggedOut' className="flex flex-col h-screen min-h-screen bg-primary" onClick={handleOpenLoginandSignupOutsideClick}>
      {/* Header */}
       <div className='flex-col z-0 text-xl'>
        <Header session={session} getStarted={getStartedClicked} />
      </div>

    {/* Body */}
      <div className={'flex-grow w-full m-auto relative transition-opacity duration-500 ' + (loginButtonClicked || signupButtonClicked || getStartedClicked ? "opacity-40" : "")} >
        <section className={'fixed z-40 left-1/2 transform transition-transform duration-700 -translate-x-1/2 ' +  (loginButtonClicked ? 'top-1/2 -translate-y-1/2' : 'top-1/4 translate-y-1/4' )} style={{opacity: !loginButtonClicked ? 0.5 : 1}} onClick={()=>{dispatch(loginClick())}}>
          <LoginForm show={loginButtonClicked} />
        </section>
        
        <section className={'fixed z-40 left-1/2 transform transition-transform duration-700 -translate-x-1/2 ' +  (signupButtonClicked ? 'top-1/2 -translate-y-1/2' : 'top-1/4 translate-y-1/4' )}  style={{opacity: !signupButtonClicked ? 0.5 : 1}} onClick={()=>{dispatch(signupClick())}}>
          <SignupForm show={signupButtonClicked}/>
          </section>

          <div className="flex flex-col min-h-screen p-16 bg-base-100">
            <div ref={ref1} className={"hero w-full sm:w-3/4 p-4 shadow-2xl rounded-2xl bg-primary justify-self-start mb-16 duration-300 hover:scale-105 " + (isVisible1 ? "opacity-100" : "opacity-10")}>
              <div className="hero-content flex-col lg:flex-row-reverse p-16">
                <img src="/1.png" className="lg:max-w-sm rounded-lg shadow-2xl mr-16 max-w-48" alt='Home Page' />
                <div className='ml-16'>
                  <h1 className="sm:text-5xl font-bold text-accent text-2xl">Welcome to Developers Meeting</h1>
                  <p className="py-6 text-left">Developers Meeting is the nexus where passionate coders converge to innovate, share, and build the software of tomorrow. Dive into a community that values collaboration, learning, and the power of code to change the world.</p>
                  <button className="btn btn-primary" onClick={handleGetStartedButton}>Get Started</button>
                </div>
              </div>
            </div>

            <div className='divider w-full'></div>

            <div ref={ref2} className={"hero bg-primary shadow-2xl w-full sm:w-3/4 p-4 rounded-2xl justify-end mt-16 self-end duration-300 hover:scale-105 " + (isVisible2 ? "opacity-100" : "opacity-10")}>
              <div className="hero-content flex-col lg:flex-row">
                <img src="/3.png" className="lg:max-w-sm rounded-lg shadow-2xl mr-16 max-w-48" alt='Developer Profile'/>
                <div>
                  <h1 className="sm:text-5xl font-bold text-pink-400 text-2xl">Connect. Collaborate. Code Together. Developers Meeting - Where Passionate Coders Unite</h1>
                  <p className="py-6">Become a part of the Developers Meeting movement. Connect with passionate developers, share your expertise, and contribute to innovative projects that shape the future of coding...</p>
                </div>
              </div>
            </div>

            <div className='divider w-full mt-16'></div>
              
            <div ref={ref3} className={"hero bg-primary shadow-2xl w-full sm:w-3/4 p-4 rounded-2xl justify-end mt-16 self-start duration-300 hover:scale-105 " + (isVisible3 ? "opacity-100" : "opacity-10")}>
              <div className="hero-content flex-col lg:flex-row">
                <img src="/2.png" className="lg:max-w-sm rounded-lg shadow-2xl mr-16 max-w-48" alt='Chat in Application' />
                <div className='ml-16'>
                  <h1 className="sm:text-5xl font-bold text-blue-400 text-2xl">Explore Seamless Collaboration with Chat</h1>
                  <p className="py-6">Connect with like-minded developers by joining or creating chat groups centered around specific projects, programming languages, or technology domains. These interactive chat spaces provide a platform for exchanging ideas, discussing coding challenges, and fostering collaborative coding efforts.</p>
                </div>
              </div>
            </div>

          </div>

     </div>
     {/* Body */}

     <div className=''>
          <Footer/>
        </div>
</main>) : (
    <main className="flex flex-col bg-base-100 h-screen min-h-screen">
    {/* Header */}
    <div className='flex-col z-40 text-xl'>
      <Header session={session} getStarted={false}/>
    </div>
    
  
    {/* Body */}
    <div className="flex flex-row flex-grow lg:px-8 bg-primary">
      {/* Sol Bölüm */}
      <div className="fixed flex-col items-center p-4 bg-base-100 w-60 border-info border-2 rounded-xl">
        <span className='text-xl text-blueGray-700 '> Selected : </span>
        <ul>
          {
            selectedCategories.map((category: string, index: number)=>(
              <li className='w-full h-12 flex-row justify-between rounded-lg items-center bg-pink-500 inline-block cursor-pointer mt-4 ml-4 py-1.5 px-4'>
                <span className="text-white text-xs font-bold my-auto ">{category}</span>
                <button type="button" className='absolute right-2 transform translate-y-1/2 bg-white border-none duration-300 rounded-lg hover:bg-red-500 p-1 ' onClick={()=>[handleUnSelectedCategories(category)]}>
                  <img width="12" height="12" src="https://img.icons8.com/sf-regular/48/delete-sign.png" alt="delete-sign"/>
                </button>
              </li>
            ))
          }
        </ul>
        <ul className='flex flex-col p-4 justify-center items-center '>
        {
         Object.keys(softwareDevelopmentCategories).map((category: string, index: number)=>(
            <li className='w-full h-12' onClick={handleSelectedCategories}>
            <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">{category}</span>
          </li>
          ))
        }
        </ul>
      </div>
  
      <div className={"w-screen fixed z-50 "} style={{display: !createPostButtonClicked ? "none" : "inline-block"}}>
        <CreatePost session={session}/>
      </div>

      <div className="flex-grow m-auto ">
        {/* Post içeriği */}
        <Posts session={session} categories={selectedCategories}/>
      </div>
  
      {/* Sağ Bölüm */}
      <div className="flex">
        <div className={'fixed z-50 top-0 right-0 duration-300' + (isAlert ? ' opacity-100' : ' opacity-0 hidden')}>
          <Alert/>
        </div>
        <div className='fixed bottom-0 right-0'>
          <ChatGroups session={session}/>
        </div>
      </div>
    </div>

    <div className='mt-5'>
      <Footer/>
    </div>
  </main>
  
    )
  }
    </>)
}
