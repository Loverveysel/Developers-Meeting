"use client"
import Header from '@/components/Header'
import LoginForm from '@/components/LoginForm'
import SignupForm from '@/components/SignupForm'
import React, { useEffect, useState }  from 'react'
import { useAppSelector, useAppDispatch } from '../store/store'
import { loginClick, signupClick } from '@/store/features/login-slice'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'
import ChatGroups from '@/components/ChatGroups'
import { signOut, useSession } from 'next-auth/react'
import Footer from '@/components/Footer'
import softwareDevelopmentCategories from '@/utils/software-development-categories'
import Alert from '@/components/Alert'

export default function HomePage() {
    const {status, data: session} =  useSession() 

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const dispatch = useAppDispatch()
    
    const loginButtonClicked = useAppSelector((state)=>{return state.loginSlice.value.loginShow})

    const signupButtonClicked = useAppSelector((state)=>{return state.loginSlice.value.signupShow})
  
    const createPostButtonClicked = useAppSelector((state)=>{return state.createPostSlice.value.clicked})

    const isAlert = useAppSelector((state)=>{return state.alertSlice.value.alert})
    

    const [getStartedClicked, setGetStartedClicked] = useState<boolean>(false)

    const handleButton = async()=>{

      const body = {
        content: "Hi it is my first messages",
        name: "MygROUP"
      }
      const res = await fetch('/api/messages', {
        method: "post",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(body)
      })

      if (res.ok) {
        const parsedRes = await res.json()
        console.log(parsedRes)
      }else{
        const text = await res.text()
        console.log(text)
      }
    }

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

          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">

              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Connect. Collaborate. Code Together. MeetDeveloper - Where Passionate Coders Unite</h1>
                <p className="mb-5">Become a part of the MeetDeveloper movement. Connect with passionate developers, share your expertise, and contribute to innovative projects that shape the future of coding..</p>
                <button type='button' onClick={handleGetStartedButton} className="btn btn-primary">Get Started</button>
                <div className=''>
                  <img  className={"absolute z-50 animate-pulse bottom-1/2 left-1/2 rotate-180 h-2/3 w-1/3 "} style={!getStartedClicked ? {display: "none"} : {opacity: 1}} src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/twisted-arrow-back-red-icon.png" alt="" />
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
