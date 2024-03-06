"use client"
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useSession } from 'next-auth/react'

export default function page() {
  const { data: session } = useSession()

    return (
    <div className='flex flex-col h-screen min-h-screen bg-primary'>
      <div className='flex-col z-0 text-xl'>
        <Header getStarted={false} session={session}/>
      </div>
      <div className='flex flex-col flex-grow w-1/2 p-5 m-auto text-left text-neutral text-m justify-center items-center justify-items-center'>
        <h1 className='text-2xl mb-3 text-neutral'>Cookie Policy</h1>
        Effective Date: 06/03/2024
<br/>
<br/>
This Cookie Policy explains how Developers Meeting we uses cookies and similar tracking technologies on our web platform. By using our application, you agree to the use of cookies as described in this policy.
<br/>
<br/>
1. What are Cookies?
<br/>
<br/>
1.1 Definition:
<br/>
<br/>
Cookies are small text files stored on your device when you visit a website or use an application. They help us enhance your user experience and analyze site/app performance.
2. Types of Cookies We Use:
<br/>
<br/>
2.1 Essential Cookies:
<br/>
<br/>
These cookies are necessary for the proper functioning of our platform. They include session cookies that enable user authentication.
2.2 Analytical Cookies:
<br/>
<br/>
We use these cookies to gather information about how users interact with our platform. This helps us improve our services.
2.3 Functionality Cookies:
<br/>
<br/>
These cookies remember your preferences and choices to provide a personalized experience.
3. Third-Party Cookies:
<br/>
<br/>
3.1 Analytics:
<br/>
<br/>
We may use third-party analytics services that utilize cookies to collect data on user interactions.
3.2 Social Media:
<br/>
<br/>
Social media features on our platform may use cookies to track your activity if you choose to interact with them.
4. Your Cookie Choices:
<br/>
<br/>
4.1 Consent:
<br/>
<br/>
By using our platform, you consent to the use of cookies as described in this policy.
4.2 Browser Settings:
<br/>
<br/>
Most browsers allow you to control cookies through their settings. However, blocking certain cookies may impact your experience on our platform.
5. Changes to this Cookie Policy:
<br/>
<br/>
5.1 Updates:
<br/>
<br/>
We may update this Cookie Policy to reflect changes in our practices. Any updates will be posted on our platform.
6. Contact Us:
<br/>
<br/>
6.1 Questions:
<br/>
<br/>
If you have any questions about our Cookie Policy, please contact us at alpercanzerr1600@gmail.com.
      </div>

      <div className='mt-5'>
        <Footer/>
      </div>
    </div>
  )
}
