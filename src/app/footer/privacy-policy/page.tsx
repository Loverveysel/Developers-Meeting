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
        <h1 className='text-2xl mb-3 text-neutral'>Privacy Policy</h1>
        Effective Date: 06/03/2024
        <br/>
<br/>
This Privacy Policy describes how Developers Meeting we collects, uses, and discloses information about users of our web platform and related services. By using our application, you agree to the terms and conditions of this Privacy Policy.
<br/>
<br/>
1. Information We Collect:
<br/>
<br/>
1.1 User Registration Information:
<br/>
<br/>
Name, surname, country, education background, areas of software interest, programming languages of interest, biography, and profile photo.
1.2 Post Information:
<br/>
<br/>
Project name, project description, project-related field, and programming languages to be used.
1.3 Chat Group Requests:
<br/>
<br/>
Information exchanged during chat group invitation requests.
2. How We Use Your Information:
<br/>
<br/>
2.1 Providing Services:
<br/>
<br/>
To display relevant posts based on user preferences.
To create chat groups for posted projects.
2.2 Communication:
<br/>
<br/>
To facilitate communication between users in chat groups.
To send notifications related to user activities.
3. Information Sharing:
<br/>
<br/>
3.1 Chat Groups:
<br/>
<br/>
User information may be shared within chat groups to facilitate communication.
3.2 Third-Party Services:
<br/>
<br/>
We may use third-party services for analytics and other purposes, and your information may be shared with them.
4. Security:
<br/>
<br/>
4.1 Data Security:
<br/>
<br/>
We take reasonable measures to protect user information, but no method of transmission over the internet is completely secure.
5. Your Choices:
<br/>
<br/>
5.1 Profile Settings:
<br/>
<br/>
Users can manage their profile settings, including information shared in posts.
5.2 Communication Preferences:
<br/>
<br/>
Users can manage their notification preferences.
6. Changes to this Privacy Policy:
<br/>
<br/>
6.1 Updates:<br/>
<br/>

We may update this Privacy Policy from time to time, and any changes will be posted on our platform.
7. Contact Us:
<br/>
<br/>
7.1 Questions:
<br/>
<br/>
If you have any questions about this Privacy Policy, please contact us at alpercanzerr1600@gmail.com.

      </div>

      <div className='mt-5'>
        <Footer/>
      </div>
    </div>
  )
}
