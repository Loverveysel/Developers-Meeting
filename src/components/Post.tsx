import React, { useEffect, useState, Suspense } from 'react'
import { useAppDispatch } from '@/store/store'
import { alert } from '@/store/features/alert-slice'
import { useRouter } from 'next/navigation'
import Select, { ActionMeta, MultiValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import softwareDevelopmentCategories from '@/lib/software-development-categories'
import PostSkeleton from './Skeleton/PostSkeleton'

const animatedComponent = makeAnimated()

interface Option {
  value: string;
  label: string;
}

const domainList = Object.keys(softwareDevelopmentCategories).map(key => ({
  value: key,
  label: key
}));


export default function Post(props:{post : any, user: any}) {
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
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [editedTitle, setEditedTitle] = useState<string>(props.post.title)
    const [editedBody, setEditedBody] = useState<string>(props.post.body)
    const [domains, setDomains] = useState<string[]>(props.post.domains)
    const [programmingLanguages, setProgrammingLanguages] = useState<string[]>(props.post.programmingLanguages)
    const [isSaved, setIsSaved] = useState<boolean>()

    const router = useRouter()

    const dispatch = useAppDispatch()

    const handelDomainInput = (
      selectedOptions: MultiValue<Option>,
      actionMeta: ActionMeta<Option>
    ) => {
      // Seçilen değerleri domains dizisine atar
      if (selectedOptions) {
          const newDomains = selectedOptions.map(element => element.value)
          setDomains(newDomains)
      } else {
          setDomains([])
      }
    }
    
    const isOptionSelected = (option: any) => {
      return domains.includes(option.value)
    }

    const handleSaveButton = async ()=>{
      const method = isSaved ? 'delete' : 'post'
      const res = await fetch('/api/savePost', {
        method,
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postId: props.post.id,
          userId: props.user.id
        }),
      })

      setIsSaved(!isSaved)
    }

    const handleEditTitle = (e: any)=> {
      setEditedTitle(e.target.value)
    }

    const handleEditBody = (e: any)=> {
      setEditedBody(e.target.value)
    }

    const handleFinishEdit = async ()=> {
      const res = await fetch('/api/post', {
        method: 'put',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postId: props.post.id,
          title: editedTitle,
          body: editedBody,
          programmingLanguages,
          domains
        }),
      })

      setIsEditMode(false)
    }

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

        props.user.savedPosts.forEach((post: any) => {
          if (post.postId == props.post.id) {
            setIsSaved(true)
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

      const res = await fetch('/api/goodIdea', {
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

      const res = await fetch('/api/badIdea', {
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

      const res = await fetch('/api/interest', {
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
    <Suspense fallback={<PostSkeleton/>}>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col max-w-2xl container mt-3 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className='w-full'>
            
            <div className='flex flex-row w-full justify-between items-center'>
              {
                !isEditMode && (<div>
                  {
                    props.post.domains.map((domain: string)=>(
                      <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">{domain}</span>  
                    ))
                  }
                </div>
                )
              }
              {
                isEditMode && (
                  <Select components={animatedComponent} isClearable={false} isMulti name='domainCategories' onChange={handelDomainInput} options={domainList} className='rounded-lg m-5 my-auto border-none w-60'/>
                )
              }
              {/*Edit Post Dropdown*/}
              <div className="dropdown dropdown-bottom dropdown-end justify-end justify-self-end self-end">
                <div tabIndex={0} role="button" className="btn rounded-2xl items-center justify-items-center bg-transparent m-1 border-none hover:bg-primary">
                    <img className='rotate-90 m-auto ' width="25" height="25" src="https://img.icons8.com/ios-filled/50/ellipsis.png" alt="ellipsis"/>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                  {
                    props.user?.id == props.post?.userId && (
                      <li className='' onClick={()=>{setIsEditMode(true)}}>
                        <div className='justify-evenly'>
                          <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/edit--v1.png" alt="edit--v1"/>
                          <a className='text-m '>Edit</a>
                        </div>
                      </li>
                    )
                  }
                  <li className='' onClick={handleSaveButton}>
                    <div className='justify-evenly'>
                      <img width="24" height="24" src={isSaved ? "https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" : "https://img.icons8.com/windows/32/bookmark-ribbon--v1.png"} alt="bookmark-ribbon--v1"/>
                      <span className='text-m '>Save</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='divider w-11/12 mx-auto'></div>
            {
              !isEditMode ? (
                <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{props.post.title}</h1>
              ) : (
                <input type="text" placeholder={props.post.title} defaultValue={props.post.title} className="input bg-white input-bordered input-primary w-full max-w-xs" onChange={handleEditTitle}/>
              )
            }
            <div className='divider w-1/2 justify-start'></div>
            {
              !isEditMode ? (
                <div className='w-11/12 ml-4 flex rounded-lg border-2 border-secondary cursor-pointer duartion-300 hover:border-black'>
                  <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer" onClick={()=>{router.push("/post/" + props.post.id)}}>{props.post.body}</p>
                </div>
              ) : (
                <textarea className="textarea textarea-bordered textarea-white bg-white w-full" defaultValue={props.post.body} placeholder={props.post.body} onChange={handleEditBody}></textarea>
              )
            }
            <div className='divider w-11/12 mx-auto'></div>
            <span className='text-l ml-4'>Required Programming Languages : </span>
            <div className='flex flex-row flex-wrap'>
              {
                isEditMode && domains && domains.length > 0
                  ? domains.map((domainElement) =>
                      softwareDevelopmentCategories[domainElement].map((element) => (
                        <div key={element} className='m-2 flex flex-col flex-wrap flex-shrink-0'>
                          <span>{element}</span>
                          <input
                            className='checkbox mr-2 ml-1'
                            type='checkbox'
                            name='programmingLanguages'
                            value={element}
                            defaultChecked={programmingLanguages.includes(element)}
                            onChange={(e) => {
                              setProgrammingLanguages([...programmingLanguages, e.target.value])
                            }}
                          />
                        </div>
                      )))
                  :  (
                    props.post.programmingLanguages.map((domain: string)=>(
                      <span className="text-white text-xs font-bold rounded-lg bg-accent inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">{domain}</span>
                    ))
                  )
            }
          </div>
          <div className='divider w-11/12 mx-auto'></div>

          </div>
          <div className="flex p-4 justify-between">
            <div className="flex items-center space-x-2">
            <div className="avatar" onClick={()=>{router.push("/profile/" + props.post.userId)}}>
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer" >
                <img src={props.post.user.profilePicture} />
              </div>
            </div>
              <h2 className="text-gray-800 font-bold cursor-pointer">{props.post.user.firstName}</h2>
            </div>
            {
              isEditMode && (
                <button type="button" className='btn btn-secondary' onClick={handleFinishEdit}> Okay</button>
              )
            }
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
    </Suspense>
    
  )
}