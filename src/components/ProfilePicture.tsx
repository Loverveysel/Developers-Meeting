import Image from "next/image"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Suspense } from "react"
import ProfilePhotoSkeleton from "./Skeleton/ProfilePhotoSkeleton"

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
      <Suspense fallback={<ProfilePhotoSkeleton />}>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle w-20 h-20 m-1">
            <div className="avatar cursor-pointer">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.profilePicture} alt="Profile Photo"/>
              </div>
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <div onClick={()=>{router.push('/profile/' + user.id)}}>
                <img width="32" height="32" src="https://img.icons8.com/windows/32/guest-male--v1.png" alt="guest-male--v1"/>
                <span>Profile</span>
              </div>
            </li>
            <li>
              <div onClick={()=>{router.push('/profile/settings')}}>
                <img className="z-[2]" width="32" height="32" src="https://img.icons8.com/windows/32/user-settings.png" alt="user-settings"/>
                <span>Profile Settings</span>
              </div>     
            </li>
            <li>
              <div onClick={()=>{router.push('/profile/saved')}}>
                <img className="z-[2]" width="32" height="32" src="https://img.icons8.com/windows/32/bookmark-ribbon.png" alt="bookmark-ribbon"/>
                <span>Saved Posts</span>
              </div>
            </li>
            
          </ul>
        </div>
      </Suspense>
        
    )
  } else {
    return (
      <Image src={session?.user?.image as string} width={50} height={50} alt="Profile Photo" className="rounded-full"/>
    )
  }
}
