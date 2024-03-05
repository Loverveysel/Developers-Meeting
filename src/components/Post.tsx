import React, { useEffect, useState } from 'react'
import { Post } from '../../prisma/generated'
import navigate from '@/lib/navigate'
import { useAppDispatch } from '@/store/store'
import { alert } from '@/store/features/alert-slice'
import { useAppSelector } from '@/store/store'

export default function Post(props:{post : Post | any, user: any}) {
    const [isGoodIdea, setIsGoodIdea] = useState<boolean>(false)
    const [isBadIdea, setIsBadIdea] = useState<boolean>(false)
    const [isInterest, setIsInterest] = useState<boolean>(false)
    const [goodIdeaLength, setGoodIdeaLength] = useState<number>(props.post.goodIdeas.length)
    const [badIdeaLength, setBadIdeaLength] = useState<number>(props.post.badIdeas.length)
    const [interestLength, setInterestLength] = useState<number>(props.post.interests.length)
    const [goodIdeaOpacity, setGoodIdeaOpacity] = useState<number>(0)
    const [badIdeaOpacity, setBadIdeaOpacity] = useState<number>(0)
    const [interestOpacity, setInterestOpacity] = useState<number>(0)
    const [goodIdeaHover, setGoodIdeaHover] = useState<boolean>(false)
    const [badIdeaHover, setBadIdeaHover] = useState<boolean>(false)
    const [interestIdeaHover, setinterestHover] = useState<boolean>(false)

    const Alert = useAppSelector((state)=>{return state.alertSlice.value.alert})

    const dispatch = useAppDispatch()

    useEffect(() => {
      const interval = setInterval(()=>{
        setGoodIdeaOpacity(prevOpacity =>prevOpacity + 2)
      }, 10)

      return clearInterval(interval)
    }, [])

    useEffect(() => {
      const interval = setInterval(()=>{
        setInterestOpacity(prevOpacity =>prevOpacity + 2)
      }, 10)

      return clearInterval(interval)
    }, [])

    useEffect(() => {
      const interval = setInterval(()=>{
        setBadIdeaOpacity(prevOpacity =>prevOpacity + 2)
      }, 10)

      return clearInterval(interval)
    }, [])

    useEffect(()=>{
      if (props.user) {
        props.post.goodIdeas.forEach((element: any) => {
          if (element.userId == props.user.id) {
            setIsGoodIdea(true)
          }
        })

        props.post.badIdeas.forEach((element: any) => {
          if (element.userId == props.user.id) {
            setIsBadIdea(true)
          }
        })

        props.post.interests.forEach((element: any) => {
          if (element.userId == props.user.id) {
            setIsInterest(true)
          }
        })
      }
    }, [props])

    const handleGoodIdeaButton = async ()=>{
      setIsGoodIdea(!isGoodIdea)
      
      let fetchBody

      if (!isGoodIdea) {
        fetchBody = {
          target: "create",
          post: props.post,
          postId: props.post.id,
          user: props.user,
          userId: props.user ? props.user.id : null
        }
        setGoodIdeaLength(goodIdeaLength + 1)
      }else{
        fetchBody = {
          target : "delete",
          post: props.post,
          postId: props.post.id,
          user: props.user,
          userId: props.user ? props.user.id : null
        }
        setGoodIdeaLength(goodIdeaLength - 1)
      }

      const res = await fetch('http://89.116.139.141:3000/api/goodIdea', {
        method: 'post',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fetchBody),
      })
    }

    const handleBadIdeaButton = async ()=>{
      setIsBadIdea(!isBadIdea)
      
      let fetchBody

      if (!isBadIdea) {
        fetchBody = {
          target: "create",
          post: props.post,
          postId: props.post.id,
          user: props.user,
          userId: props.user ? props.user.id : null
        }
        setBadIdeaLength(badIdeaLength + 1)
      }else{
        fetchBody = {
          target : "delete",
          post: props.post,
          postId: props.post.id,
          user: props.user,
          userId: props.user ? props.user.id : null
        }
        setBadIdeaLength(badIdeaLength - 1)
      }

      const res = await fetch('http://89.116.139.141:3000/api/badIdea', {
        method: 'post',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fetchBody),
      })
    }

    const handleInterestButton = async ()=>{
      setIsInterest(!isInterest)
      
      let fetchBody
      
      if (!isInterest) {
        fetchBody = {
          target: "create",
          post: props.post,
          postId: props.post.id,
          user: props.user,
          userId: props.user ? props.user.id : null
        }
        setInterestLength(interestLength + 1)
        dispatch(alert())

        setTimeout(()=>{
          dispatch(alert())
        }, 3000)
        
      }else{
        fetchBody = {
          target : "delete",
          post: props.post,
          postId: props.post.id,
          user: props.user,
          userId: props.user ? props.user.id : null
        }
        setInterestLength(interestLength - 1)
      }

      const res = await fetch('http://89.116.139.141:3000/api/interest', {
        method: 'post',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fetchBody),
      })
    }

    const handleGoodIdeaHover = ()=>{
      setGoodIdeaHover(true)
      setTimeout(()=>{
        setGoodIdeaOpacity(prevOpacity => prevOpacity + 2)
      }, 1000)
    }

    const handleGoodIdeaDisHover = ()=>{
      setGoodIdeaHover(false)
      setGoodIdeaOpacity(prevOpacity => prevOpacity - 2)
    }

    const handleBadIdeaHover = ()=>{
      setBadIdeaHover(true)
      setTimeout(()=>{
        setBadIdeaOpacity(prevOpacity => prevOpacity + 2)
      }, 1000)
    }

    const handleBadIdeaDisHover = ()=>{
      setBadIdeaHover(false)
      setBadIdeaOpacity(prevOpacity => prevOpacity - 2)
    }

    const handleInterestHover = ()=>{
      setinterestHover(true)
      setTimeout(()=>{
        setInterestOpacity(prevOpacity => prevOpacity + 2)
      }, 1000)
    }

    const handleInterestDisHover = ()=>{
      setinterestHover(false)
      setInterestOpacity(prevOpacity => prevOpacity - 2)
    }

  if (props.post) return (
    <div className="flex justify-center items-center">
      <div className="max-w-2xl container mt-3 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <div className='flex flex-row '>
            {
              props.post.domains.map((domain: string)=>(
                <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">{domain}</span>
              ))
            }
          </div>
          <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{props.post.title}</h1>
          <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">{props.post.body}</p>
        </div>
        <div className="flex p-4 justify-between">
          <div className="flex items-center space-x-2">
          <div className="avatar" onClick={()=>{navigate("/profile/" + props.post.userId)}}>
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer" >
              <img src={`http://localhost:3000/api/pp/${props.post.user.id}`} />
            </div>
          </div>
            <h2 className="text-gray-800 font-bold cursor-pointer">{props.post.user.firstName}</h2>
          </div>
          <div className="flex space-x-2">
            <div className="flex space-x-1 items-center">
              <span onClick={handleBadIdeaButton} className='bg-red w-6 h-6 hover:cursor-pointer hover:border-2 border-black ' onMouseEnter={handleBadIdeaHover} onMouseLeave={handleBadIdeaDisHover}>
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/bad-decision.png" alt="bad-decision"/>
              </span>
              <span>{badIdeaLength}</span>
              <div about='what is this button' className={"absolute z-50 transform translate-x-5 transition-opacity duration-500 opacity-" + badIdeaOpacity} style={badIdeaHover ? {} : {display:"none"}}> 
                <div className='' >
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="card-actions justify-start">
                      <span className='font-bold'>Bad Idea</span>
                    </div>
                    <p>If you believe that the idea is not suitable for the project, use this button to specify why. Every opinion matters!</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-1 items-center">
              <span onClick={handleInterestButton} className='bg-red w-6 h-6 hover:cursor-pointer hover:border-2 border-black' onMouseEnter={handleInterestHover} onMouseLeave={handleInterestDisHover}>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/detective.png" alt="detective"/>
              </span>
              <span>{interestLength}</span>
              <div about='what is this button' className={"absolute z-50 transform translate-x-5 transition-opacity duration-500 opacity-" + interestOpacity} style={interestIdeaHover ? {display: ""} : {display:"none"}}> 
                <div className='' >
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                      <div className="card-actions justify-start">
                        <span className='font-bold'>Interest</span>
                      </div>
                    <p>Express your interest in the idea by using this button. Interesting projects are always welcome!</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-1 items-center relative">
              <span onClick={handleGoodIdeaButton} className='bg-red w-6 h-6 hover:cursor-pointer hover:border-2 border-black' onMouseEnter={handleGoodIdeaHover} onMouseLeave={handleGoodIdeaDisHover}>
                <img width="32" height="32" src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-good-idea-business-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="external-good-idea-business-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto"/>
              </span>
              <span>{goodIdeaLength}</span>
              <div about='what is this button' className={"absolute z-50 transform translate-x-5 hover-target transition-opacity duration-500 opacity-" + goodIdeaOpacity} style={goodIdeaHover ? {display: ""} : {display:"none"}}> 
                <div className='' >
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                      <div className="card-actions justify-start">
                        <span className='font-bold'>Good Idea</span>
                      </div>
                    <p>If you see a great idea, express it by using this button. Good ideas add value to our project!</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}