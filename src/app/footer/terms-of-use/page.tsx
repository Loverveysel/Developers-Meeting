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
        <h1 className='text-2xl text-neutral mb-3 mx-auto '>Terms of Use</h1>
        Last Updated: 06/03/2024
        <br/>
<br/>
Please read these Terms of Use ("Terms") carefully before using Developers Meeting (the "Service") operated by me.
<br/>
<br/>
Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
<br/>
<br/>
By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
<br/>
<br/>
1. Accounts
<br/>
<br/>
When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
<br/>
<br/>
You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
<br/>
<br/>
2. User Content
<br/>
<br/>
Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
<br/>
<br/>
By posting Content on or through the Service, you represent and warrant that: (a) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (b) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.
<br/>
<br/>
3. Intellectual Property
<br/>
<br/>
The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Developers Meeting and its licensors. The Service is protected by copyright, trademark, and other laws of both the Turkey and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Developers Meeting.
<br/>
<br/>
4. Termination
<br/>
<br/>
We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
<br/>
<br/>
Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
<br/>
<br/>
5. Changes
<br/>
<br/>
We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is a material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
<br/>
<br/>
By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
<br/>
<br/>
6. Contact Us<br/>
<br/>
If you have any questions about these Terms, please contact us at alpercanzerr1600@gmail.com.
      </div>

      <div className='mt-5'>
        <Footer/>
      </div>
    </div>
  )
}
