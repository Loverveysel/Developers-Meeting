import { Session } from "next-auth"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePicture({ session }: { session: Session | null }) {
  const [user, setUser] = useState<any | null>(null)
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
        throw Error("Error fetching user")
      }
    }
    fetchUser()
  }, [session])

  if (!user) {
    return (<>
        <span className="loading loading-ring loading-xs"></span>
    </>)
  }

  if (user.profilePicture) {
    
    return (
      <a href={"/profile/" + user.id}>
        <div className="avatar cursor-pointer" onClick={()=>{router.push("/profile/" + user.id)}}>
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.profilePicture} alt="Profile Photo"/>
          </div>
        </div>
      </a>
      
    )
  } else {
    return (
      <Image src={session?.user?.image as string} width={50} height={50} alt="Profile Photo" className="rounded-full"/>
    )
  }
}
