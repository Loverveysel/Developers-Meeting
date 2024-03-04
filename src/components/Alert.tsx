import React from 'react'
import { useAppDispatch } from '@/store/store'
import { alert } from '@/store/features/alert-slice'

export default function Alert() {
    const dispatch = useAppDispatch()
  return (
    <div role="alert" className="alert bg-accent shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
            <h3 className="font-bold">Invitation</h3>
            <div className="text-s">You sent an invitation to join the idea group...</div>
        </div>
        <button className="btn btn-m" onClick={()=>{dispatch(alert())}}>Close</button>
    </div>
  )
}
