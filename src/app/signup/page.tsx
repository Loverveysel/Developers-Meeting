"use client"
import React, { useEffect, useState } from 'react'
import RegisterFormPersonal from '@/components/RegisterFormPersonal'
import RegisterFormInterests from '@/components/RegisterFormInterests'
import RegisterFormProfile from '@/components/RegisterFormProfile'

export default function SignUpPage() {

    const [step, setStep] = useState(1)
    const [targetVal, setTargetVal] = useState(step + 1)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

    let buttonDisable = false

    const startInterval = () => {
      const intervalId = setInterval(() => {
        setStep((prevStep) => prevStep + 0.02);
      }, 10)
  
      return intervalId;
    };
  
    const stopInterval = (intervalId: NodeJS.Timeout | null) => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };

    const incrementStep = ()=>{

      
      if (step < targetVal) {
        setIntervalId(startInterval())
      }
      else{
        setStep(targetVal)
        stopInterval(intervalId)
        setTargetVal(targetVal + 1)
      }
      buttonDisable = true
      

      window.setTimeout(()=>{
        buttonDisable = false
      },500)

    }
    
    useEffect(() => {
      return () => {
        if (step >= targetVal) {
          stopInterval(intervalId)
          setStep(targetVal)
          setTargetVal(step + 1)
          console.log(step);
          
        }
      };
    }, [step]); 


  return (
    <main className='relative flex-col grid bg-gray-100 min-h-screen w-screen'>
      <div className='mx-auto'>
        <span className='text-4xl font-medium bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent'>Developers Meeting </span>
      </div>

      <div className="absolute bottom-3/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-11/12">
        <progress className="progress w-full z-10" value={step/3} max="1"></progress>
        <div className='flex justify-between'>
          <span>1. Personal Informations</span>
          <span className='m-auto'>2. Your Interests</span>
          <span>3. Profile Settings</span>
        </div>
      </div>

      <div className="divider my-auto"></div> 

      <div className='mx-auto mt-10'>
        <span className='font-medium text-4xl'>Sign Up</span>
      </div>

      <div className="divider my-auto"></div> 

      <div className="relative m-auto flex">

        <div className={`m-auto transition-opacity transition-transform transition-opacity duration-500 ease-in-out ${step === 1 ?  'translate-x-0 opacity-100' : (step > 1 && step < 2) ? '-translate-x-full opacity-15'  : '-translate-x-full opacity-0 hidden' }`}>
          <RegisterFormPersonal/>
        </div>

        <div className={`m-auto transition-transform transition-opacity duration-500 ease-in-out${step === 2 ?  'translate-x-0 opacity-100' : step > 1 && step < 2  ? '-translate-x-0 opacity-50' : '-translate-x-full opacity-0 hidden'}`}>
          <RegisterFormInterests/>
        </div>

        <div className={`m-auto transition-transform transition-opacity duration-500 ease-in-out${step > 3 ?  'translate-x-0 opacity-100' : step > 2 && step < 3  ? '-translate-x-0 opacity-50' : '-translate-x-full opacity-0 hidden'}`}>
          <RegisterFormProfile/>
        </div>


        {
          step <= 2 ? (
            <div className='relative  left-1 transform translate-x-1 translate-y-16 w-8 h-8 border border-gray-800 rounded-full'>
              <button className='m-auto' type="button" onClick={incrementStep} disabled={buttonDisable}>
                <span className="material-symbols-outlined hover:cursor-pointer my-auto" style={{color: "black"}}>
                    arrow_forward_ios
                </span>
              </button>
            </div>
          ) : (
            <></>
            )
          }
          </div>
    </main>
  )
}
