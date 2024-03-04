"use client"
import React, { useState }from 'react'
import softwareDevelopmentCategories from '@/utils/software-development-categories'
import Select, {ActionMeta, MultiValue} from 'react-select'
import makeAnimated from 'react-select/animated'
import { useAppDispatch } from '@/store/store'
import {EducationExperience, Domains, ProgrammingLanguages } from '@/store/features/signup-slice'

const animatedComponent = makeAnimated()

interface Option {
    value: string;
    label: string;
  }

  
const domainList = Object.keys(softwareDevelopmentCategories).map(key => ({
    value: key,
    label: key
  }));
  

export default function RegisterFormInterests() {
    const dispatch = useAppDispatch()
    
    const [domains, setDomains] = useState<string[]>([])
    const [pl, setPl] = useState<string[]>([]) //user programming languages

    const handelDomainInput = (
        selectedOptions: MultiValue<Option>,
        actionMeta: ActionMeta<Option>
      ) => {
        // Seçilen değerleri domains dizisine atar
        if (selectedOptions) {
            const newDomains = selectedOptions.map(element => element.value)
            setDomains(newDomains)
            dispatch(Domains({domains: newDomains}))
        } else {
            setDomains([])
        }
        
      }
      
    const handleProgrammingLanguages = (e: any)=>{
      setPl([...pl, e.target.value])

      dispatch(ProgrammingLanguages({programmingLanguages: [...pl, e.target.value]}))
    }

    const handleEducationExperience = (e:any)=>{
      dispatch(EducationExperience(e.target.value))
    }
    
    return (
    <div className='grid m-auto border-2 border-gray-500  max-w-xl bg-white rounded-xl p-5'>
        <span className='text-black ml-5 m-3'>Education Experience : </span>
        <select onChange={handleEducationExperience} className='rounded-lg m-5 my-auto border-2 border-gray-800 w-1/4' defaultValue={"other"}>
            <option value="highSchool">High School</option>
            <option value="college">College</option>
            <option value="graduateSchool">Graduate School</option>
            <option value="professionalTraining">Professional Training</option>
            <option value="other">Other</option>
        </select>

        <span className='text-black ml-5 m-3'>Which software development domain are you interested in?</span>
        
        <Select components={animatedComponent} isMulti name='domainCategories' onChange={handelDomainInput} options={domainList} className='rounded-lg m-5 my-auto border-2 border-gray-800 w-full'/>

        <span className='text-black ml-5 m-3'>Programming Languages : </span>
        <div className='flex flex-wrap'>
        {domains && domains.length > 0 ? (
          domains.map((domainElement) =>
            softwareDevelopmentCategories[domainElement].map((element) => (
              <div key={element} className='m-2'>
                <span>{element}</span>
                <input
                  className='checkbox mr-2 ml-1'
                  type='checkbox'
                  name='programmingLanguages'
                  value={element}
                  onChange={handleProgrammingLanguages}
                />
              </div>
            ))
          )
        ) : (
          <></>
        )}
      </div>
        
    </div>)
}
