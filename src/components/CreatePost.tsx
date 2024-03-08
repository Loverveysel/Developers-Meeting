import React, { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import { useAppDispatch } from '@/store/store'
import { createPostClick } from '@/store/features/create-post-slice'
import { handleInput } from '@/lib/methods'
import softwareDevelopmentCategories from '@/lib/software-development-categories'
import Select, {ActionMeta, MultiValue} from 'react-select'
import makeAnimated from 'react-select/animated'


const animatedComponent = makeAnimated()

interface Option {
    value: string;
    label: string;
  }

  
const domainList = Object.keys(softwareDevelopmentCategories).map(key => ({
    value: key,
    label: key
  }));
  


export default function CreatePost(props: {session: Session}) {
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>([])
  const [userId, setUserId] = useState<string>("")
  const [domains, setDomains] = useState<string[]>()

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

  useEffect(()=>{
    const fetchUser = async ()=>{
      try {
        const user = await fetch('/api/user', {
        method: 'get',
        headers: {
          "Content-Type": "application/json",
         },
        })
        const parsedUser = await user.json()
        setUserId(parsedUser.id)
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchUser()
  }, [props.session])

  const handleCreateButon = async ()=>{
    const post = {
      body,
      title,
      programmingLanguages,
      userId,
      domains,
    } 
    
    const res = await fetch('/api/post', {
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })

    if (!res.ok) {
      throw new Error("Post could not created")
    }
    else{
      dispatch(createPostClick())
    }
  }

  return (
    <div className='mx-auto w-10/12 flex flex-col'>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Idea</div>
      
      <div className="mx-auto w-10/12 flex flex-col bg-gray-400 text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text" onChange={(e)=>{handleInput(setTitle, e)}}/>
        <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here" onChange={(e)=>{handleInput(setBody, e)}}></textarea>
        
        <div className='mt-4 w-11/12 sec'>
          <Select components={animatedComponent} isMulti name='domainCategories' onChange={handelDomainInput} options={domainList} className='rounded-lg m-5 my-auto border-none w-full'/>
        </div>

        <div className='flex '>
          Programming languages : 
        {
        domains && domains.length > 0
          ? domains.map((domainElement) =>
              softwareDevelopmentCategories[domainElement].map((element) => (
                <div key={element} className='m-2'>
                  <span>{element}</span>
                  <input
                    className='checkbox mr-2 ml-1'
                    type='checkbox'
                    name='programmingLanguages'
                    value={element}
                    onChange={(e) => {
                      setProgrammingLanguages([...programmingLanguages, e.target.value])
                    }}
                  />
                </div>
              )))
          : <></>
        }
        </div>
        

        <div className="icons flex text-gray-500 m-2">
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div className="buttons flex">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" onClick={()=>{dispatch(createPostClick())}}>Cancel</div>
          <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" onClick={handleCreateButon}>Share</div>
        </div>
      </div>

    </div>
  )
}
