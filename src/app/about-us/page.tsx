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
        <h1 className='text-2xl text-neutral'>About Us</h1>
        About Us

Welcome to Developers Meeting!

At Developers Meeting, we believe in the power of collaboration and knowledge sharing within the global community of software developers. Our platform is designed to bring like-minded individuals together, creating a space where creativity, innovation, and expertise flourish.

Our Mission

Our mission is to foster a community that transcends geographical boundaries, connecting developers from diverse backgrounds and experiences. We aim to provide a platform where individuals can showcase their projects, share insights, and collaborate on exciting ventures.

Why Developers Meeting?

Connect with Like-Minded Developers: Discover and connect with developers who share your interests, expertise, and passion for coding.

Showcase Your Projects: Share your latest projects, whether they're in the realms of web development, mobile apps, or any other software-related field.

Build Collaborative Networks: Create and join chat groups to discuss, plan, and execute projects with fellow developers who are as enthusiastic about technology as you are.

Our Values

Inclusivity: We welcome developers from all backgrounds, skill levels, and corners of the globe.

Innovation: We encourage creative thinking and the pursuit of innovative solutions to technical challenges.

Knowledge Sharing: We believe in the power of shared knowledge and continuous learning.

Meet the Team

[Alper Can Özer] 

Contact Us

Have questions, suggestions, or just want to say hello? We'd love to hear from you! Reach out to us at [e-posta adresi].

Thank you for being part of the Developers Meeting community!
      </div>

      <div className='mt-5'>
        <Footer/>
      </div>
    </div>
  )
}
