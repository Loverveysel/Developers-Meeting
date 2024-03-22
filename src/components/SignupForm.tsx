import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react';

export default function SignupForm(props:{show:Boolean}) {
  return (
       props.show &&   
    <main className='grid rounded-2xl border-2 bg-white border-neutral m:auto p-6'>
        <button onClick={()=>signIn('google', {callbackUrl:'/signup', }  )} className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" width={6} height={6}/>
            <span>Signup with Google</span>
        </button>
    </main>
  )
}
