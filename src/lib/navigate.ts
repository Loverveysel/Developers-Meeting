'use server'
 
import { redirect } from 'next/navigation'
 
export  default async function navigate(path : string) {
  redirect(path)
}