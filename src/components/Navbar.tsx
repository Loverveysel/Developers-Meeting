import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = (props: {user: any}) => {
  const router = useRouter()
  
  // Array containing navigation items
  const navItems = [
    { id: 1, icon: 'https://img.icons8.com/ios/50/home--v1.png',  width: 48, heigth: 48, href: "/"},
    { id: 2, icon: 'https://img.icons8.com/sf-regular/48/administrator-male.png' , width: 48, heigth: 48, href: "/profile/" + props.user.id},   
  ]
  
  console.log(props.user.chatGroups[0].chatGroup.name)
  

  if (props.user) {
      return (
        <div className='fixed flex-col inline-flex z-50 w-full bg-white justify-between items-center min-h-screen mx-auto px-4 text-white container shadow-2xl border-r-2 border-r-base-100' style={{width: 160}}>
          {/* Logo */}
          <h2 className="text-2xl mt-16 font-bold leading-7 bg-gradient-to-r mx-auto from-purple-400 to-pink-600 bg-clip-text text-transparent items-center justify-start ">Meet Developers</h2>
          
          {/* Navigation */}
          <ul className='flex-col mb-6'>
            {navItems.map(item => (
              <li
              
                key={item.id}
    
                className='p-5 '
              >
                <button type="button" className='btn bg-transparent border-none hover:bg-accent' onClick={()=>{router.push(item.href)}}>
                    <img  src={item.icon} alt="" width={item.width} height={item.heigth} />
                </button>
              </li>
            ))}
          </ul>

          
          <div className='mb-5'>
            <span className='text-m justify-start items-start text-blueGray-600 m-auto'>Groups</span>
            <div className='divider'></div>
            <ul className='py-2'>
              {
                props.user.chatGroups.map((group: any ) => (
                    <li className='mb-2'>
                      <button type="button" className='btn shadow-l w-20 bg-white border-warning mt-3 inline-flex hover:bg-accent items-center justify-start'>
                        <span className='text-sm text-blueGray-600  truncate'>{group.chatGroup.name}</span>
                      </button>
                    </li>  
                  )
                )
              }
              
            </ul>
          </div>

        </div>
      )
  }
  else{
    return (
      <div></div>
    )
  }

}

export default Navbar