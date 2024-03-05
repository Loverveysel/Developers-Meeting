import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Session } from 'next-auth';

interface PostType {
    id: string;
    title: string;
    body: string;
    userId: string;
    programmingLanguages: string[];
    domains: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  

export default function Posts(props: {session : Session, categories: string[]}) {
    const [posts, setPosts] = useState<PostType[]>([])
    const [user, setUser] = useState()

    useEffect(()=>{
        const get = async()=>{
            const res = await fetch('http://89.116.139.141:3000/api/posts', {
              method: "get",
              headers: {
                "Content-Type": "application/json"
              },
            })
            const parsedRes = await res.json()
            setPosts(parsedRes)
            const res2 = await fetch('http://89.116.139.141:3000/api/user')
            const parsedRes2 = await res2.json()
            setUser(parsedRes2)
        }   
        get()
    }, [props.session])

    useEffect(()=>{
      
      if (props.categories) {
        
        const query = props.categories.join('&')

        const get = async()=>{
            const res = await fetch('http://89.116.139.141:3000/api/posts/' + query, {
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
                <Post post={post} user={user}/>
            )) : <></>           
        }
    </div>
  )
}
