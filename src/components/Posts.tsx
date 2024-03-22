import React, { useEffect, useState } from 'react'
import { Session } from 'next-auth';
import Post from './Post'

export default function Posts(props: {session : Session, categories: string[]}) {
    const [posts, setPosts] = useState<any[]>([])
    const [user, setUser] = useState()

    useEffect(()=>{
        const get = async()=>{
            const res = await fetch('/api/posts', {
              method: "get",
              headers: {
                "Content-Type": "application/json"
              },
            })
            const parsedRes = await res.json()
            setPosts(parsedRes)
            const res2 = await fetch('/api/user')
            const parsedRes2 = await res2.json()
            setUser(parsedRes2)
            console.log(parsedRes2);
            
        }   
        get()
    }, [props.session])

    useEffect(()=>{
      
      if (props.categories) {
        
        const query = props.categories.join('&')

        const get = async()=>{
            const res = await fetch('/api/posts/' + query, {
              method: "get",
              headers: {
                "Content-Type": "application/json"
              },
            })
            const parsedRes = await res.json()
            console.log(parsedRes);
            setPosts(parsedRes)
        }   
        get()
      }
    }, [props.categories])

  return (
    <div>
        {posts ?
            posts.map((post)=>(
              <div className='mt-5'>
                <Post post={post} user={user}/>
                <div className='divider max-w-xl mx-auto mt-10'></div>
              </div>
            )) : <></>           
        }
    </div>
  )
}
