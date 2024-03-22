"use client"
import React, { useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import ChatGroups from '@/components/ChatGroups'
import Footer from '@/components/Footer'
import softwareDevelopmentCategories from '@/lib/software-development-categories'
import Select, {ActionMeta, MultiValue} from 'react-select'
import makeAnimated from 'react-select/animated'
import Image from 'next/image'

const animatedComponent = makeAnimated()

interface Option {
  value: string
  label: string
}

const domainList = Object.keys(softwareDevelopmentCategories).map(key => ({
  value: key,
  label: key
}))

export default function Page() {
    const [user, setUser] = useState<any>()
    const { data: session } = useSession()
    const [image, setImage] = useState<any>()
    const [domains, setDomains] = useState<string[]>()
    const [programmingLanguages, setProgrammingLanguages] = useState<string[]>([])
    const [educationExperience, setEducationExperience] = useState<string>("")
    const [biography, setBiography] = useState<string>("")
    const [createObjectURL, setCreateObjectURL] = useState<string>()

    const handleBiography = (e:any)=>{  
        setBiography(e.target.value)
    }

    const handleEducationExperience = (e:any)=>{
        setEducationExperience(e.target.value)
    }

    const uploadToClient = (event:any) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0]
    
          setImage(i)        
          setCreateObjectURL(URL.createObjectURL(i))
        }
    }

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
        const get = async()=>{
            const res = await fetch('/api/user', {
              method: "get",
              headers: {
                "Content-Type": "application/json"
              },
            })
            const data = await res.json()
            setUser(data)
        }   
        get()
    }, [])

    const handleSubmitButton = async ()=>{
        const body = {
            programmingLanguages,
            educationExperience,
            biography
        }
        await fetch('/api/user', {
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        if (image) {
            const body = new FormData()
            body.append('fileType', "pp")
            body.append("id", user.id)
            body.append("profilePicture", image)
            await fetch("/api/pp", {
                method: "POST",
                body
            })
        }
    }

    if (user) {
        return (
            <main className="flex flex-row bg-base-100 items-start justify-between w-screen h-screen ">
                <div className='left-0 w-60'>
                    <Navbar user={user}/>
                </div>
                <div className='bg-base-100 mx-auto w-full h-screen'>
                <section className="mt-48">
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0px)"}}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    </svg>
                    </div>
                </section>
                <section className="relative w-5/6 mx-auto py-16 bg-base-100">
                    <div className="mx-auto px-4">
                    <div className="relative flex flex-col max-w-7xl min-w-96 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 order-2 flex-row mt-5 jitem-center justify-center">
                                <Image src={createObjectURL == null ? user.profilePicture as string : createObjectURL} className='rounded-full mx-auto' width={50} height={50} alt='Profile Photo'></Image>
                                <input type="file"  accept="image/*" multiple={false} className="file-input " onChange={uploadToClient}/>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
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
                            {user.firstName}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                            {user.country}
                            </div>
                        </div>
                        <div className='text-left items-start'>
                            <div className="mb-2 text-blueGray-600 mt-10 flex justify-start items-center">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                <div className='mt-4 w-1/3 self-center'>
                                    <Select components={animatedComponent} isMulti name='domainCategories' onChange={handelDomainInput} options={domainList} className='rounded-lg m-5 my-auto border-none w-full'/>
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap'>
                            Programming languages : 
                            {
                            domains && domains.length > 0
                            ? domains.map((domainElement) =>
                                softwareDevelopmentCategories[domainElement].map((element) => (
                                    <div key={element} className='m-2 '>
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
                            </div>
                            <div className="mt-5 text-blueGray-600 flex justify-start items-center">
                                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{"Graduated by "}
                                <select onChange={handleEducationExperience} className='rounded-lg m-5 my-auto border-2 border-gray-800 w-1/4' defaultValue={"other"}>
                                    <option value="highSchool">High School</option>
                                    <option value="college">College</option>
                                    <option value="graduateSchool">Graduate School</option>
                                    <option value="professionalTraining">Professional Training</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap items-center justify-between">
                                <span className='text ml-5'>About you : </span>
                                <input type="text" onChange={handleBiography}  className='textarea ml-5' placeholder='Type here'/>
                                <button type="button" className='btn m-auto mt-5 border text-center text-lg' onClick={handleSubmitButton}>Submit</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                </div>
                <div className='fixed bottom-0 right-0'>
                  <ChatGroups session={session}/>
                </div>
                <div>
                    <Footer/>
                </div>
            </main>
          )      
    }
}
