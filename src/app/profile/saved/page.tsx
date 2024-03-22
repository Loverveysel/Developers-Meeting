"use client"
import React, { useState, useEffect} from 'react'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'

export default function Page() {
    const [user, setUser] = useState<any>()
    const [posts, setPosts] = useState<any[]>()

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
            const posts = data.savedPosts.map((savedPost: any)=>savedPost.post)
            setPosts(posts)
            console.log(posts)
        }   
        get()
    }, [])
    if (user) {
        return (
          <main className="flex flex-row bg-base-100 items-start justify-between w-screen h-screen ">
              <div className='left-0 w-60'>
                  <Navbar user={user}/>
              </div>
              <div className='mx-auto w-5/6'>
              <div className=' w-full flex mb-16 flex-wrap mx-auto '>
                    { posts ?
                        posts.map((post:any)=>(
                            <div className='mt-5  ml-5 w-96'>
                                <Post post={post} user={user}/>
                            </div>
                        ))   : (<></>)     
                    }
                </div>
              </div>
          </main>
        )      
    }
  
}
