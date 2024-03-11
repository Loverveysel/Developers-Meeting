import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {  useDispatch } from 'react-redux'
import  { FinalStep } from '@/store/features/signup-slice'
import { useAppSelector } from '@/store/store'
import { useRouter } from 'next/navigation'

export default function RegisterFormProfile() {
    const signUpState = useAppSelector((state)=>{return state.signupSlice.value})
    const dispatch = useDispatch()
    const session = useSession()

    const [biography, setBioography] = useState<string>("")
    const [image, setImage] = useState<any>()
    const [createObjectURL, setCreateObjectURL] = useState<string>()

    const router = useRouter()

    useEffect(()=>{
      setImage(session.data?.user?.image)
    }, [session])

    const handleBiography = (e:any)=>{
      setBioography(e.target.value)
    } 

    const uploadToClient = (event:any) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0]
  
        setImage(i)
        console.log(image);
        
        setCreateObjectURL(URL.createObjectURL(i))
      }
    }

    const uploadToServer = async (id: string) => {
      const body = new FormData()
      body.append('fileType', "pp")
      body.append("id", id)
      body.append("profilePicture", image)
      await fetch("/api/pp", {
        method: "POST",
        body
      })
    }

    const createUser = async (user: any) => {      
      const response = await fetch("/api/user", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user})
      })
    
      if (!response.ok) {
        throw new Error(
          `User could not created: ${response.status} ${await response.text()}`
        )
      }
    
      const newUser = await response.json()
      console.log("User has been created:", newUser)

      if(typeof image != "string"){
        await uploadToServer(newUser.id)
      }
    }

    const handleSubmitButton = async ()=>{      
      dispatch(FinalStep({ biography }))
      console.log(signUpState);
      
      const user = {
        profilePicture: image,
        email : session.data?.user?.email ?? null,
        ...signUpState,
      }
      console.log(user)
      await createUser(user as any)

      router.push("/")
    }

  return (
    <div className='grid m-auto border-2 border-gray-500  max-w-xl bg-white rounded-xl p-5'>
      <form action="" >
      <span>Profile Photo : </span>
        <input type="file"  accept="image/*" multiple={false} className="file-input w-full max-w-xs" onChange={uploadToClient}/>
        <Image src={createObjectURL == null ? session?.data?.user?.image as string : createObjectURL} className='rounded-full' width={50} height={50} alt='Profile Photo'></Image>
        <span className='text'>About you : </span>
        <input type="text" onChange={handleBiography}  className='textarea' placeholder='Type here'/>
        <button type="button" className='btn m-auto mt-5 border text-center text-lg' onClick={handleSubmitButton}>Submit</button>
      </form>
    </div>
  )
}
