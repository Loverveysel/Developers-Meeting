"use client"
import React, {useState} from 'react'
import { CountryDropdown } from 'react-country-region-selector'
import { useAppDispatch } from '@/store/store'
import { FirstName, SecondName, Country } from '@/store/features/signup-slice'

export default function RegisterFormPersonal() {
    const dispatch = useAppDispatch()

    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [country, setCountry] = useState("")

    const handleFirstNameInput = (e:any)=>{
        setFirstName(e.target.value)
        dispatch(FirstName(e.target.value))
    }

    const handleSecondNameInput = (e:any)=>{
        setSecondName(e.target.value)
        dispatch(SecondName(e.target.value))
    }

    const handleCountryInput =  (cntry: string) =>{
        setCountry(cntry)
        dispatch(Country(cntry))
    }
    
    return (
    <div className='grid m-auto border-2 border-gray-500   bg-white rounded-xl p-5'>
        <span className='text-black ml-5 m-3'>First Name : </span>
        <input type="text" className='rounded-lg m-5 my-auto border-2 border-gray-800' onChange={handleFirstNameInput} placeholder='First Name'/>
        
        <span className='text-black ml-5 m-3'>Second Name : </span>
        <input type="text" className='rounded-lg m-5 my-auto border-2 border-gray-800' onChange={handleSecondNameInput} placeholder='Second Name'/>

        <span className='text-black ml-5 mt-3 mb-0'>Country :  </span>
        <div className='rounded-lg m-5 border-2 border-gray-800 my-auto000'>
            <CountryDropdown onChange={handleCountryInput} value={country}></CountryDropdown>
        </div>
    </div>
  )
}
