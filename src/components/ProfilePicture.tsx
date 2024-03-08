import { Session } from "next-auth"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  profilePicture: string | null // Adjust the type based on your actual data structure
}

export default function ProfilePicture({ session }: { session: Session | null }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        })

        const userData = await res.json()
        setUser(userData)
      } catch (error) {
        console.error("Error fetching user:", error)
      }
    }

    fetchUser()
  }, [session])

  if (!user) {
    return (<>
        <span className="loading loading-ring loading-xs"></span>
    </>) // You might want to return a loading indicator or handle the loading state
  }

  if (user.profilePicture) {
    
    return (
      <a href={"/profile/" + user.id}>
        <div className="avatar cursor-pointer" onClick={()=>{router.push("/profile/" + user.id)}}>
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.profilePicture} />
          </div>
        </div>
      </a>
      
    )
  } else {
    console.log(user)

    return (
      <Image src={session?.user?.image as string} width={50} height={50} alt="" className="rounded-full"/>
    )
  }
}
