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
      <div className='m-auto text-center text-neutral text-m justify-center items-center justify-items-center'>
        <h1 className='text-2xl text-neutral'>Privacy Policy</h1>
        Effective Date: 06/03/2024

This Privacy Policy describes how Developers Meeting we collects, uses, and discloses information about users of our web platform and related services. By using our application, you agree to the terms and conditions of this Privacy Policy.

1. Information We Collect:

1.1 User Registration Information:

Name, surname, country, education background, areas of software interest, programming languages of interest, biography, and profile photo.
1.2 Post Information:

Project name, project description, project-related field, and programming languages to be used.
1.3 Chat Group Requests:

Information exchanged during chat group invitation requests.
2. How We Use Your Information:

2.1 Providing Services:

To display relevant posts based on user preferences.
To create chat groups for posted projects.
2.2 Communication:

To facilitate communication between users in chat groups.
To send notifications related to user activities.
3. Information Sharing:

3.1 Chat Groups:

User information may be shared within chat groups to facilitate communication.
3.2 Third-Party Services:

We may use third-party services for analytics and other purposes, and your information may be shared with them.
4. Security:

4.1 Data Security:

We take reasonable measures to protect user information, but no method of transmission over the internet is completely secure.
5. Your Choices:

5.1 Profile Settings:

Users can manage their profile settings, including information shared in posts.
5.2 Communication Preferences:

Users can manage their notification preferences.
6. Changes to this Privacy Policy:

6.1 Updates:

We may update this Privacy Policy from time to time, and any changes will be posted on our platform.
7. Contact Us:

7.1 Questions:

If you have any questions about this Privacy Policy, please contact us at alpercanzerr1600@gmail.com.

      </div>

      <div className='mt-5'>
        <Footer/>
      </div>
    </div>
  )
}
