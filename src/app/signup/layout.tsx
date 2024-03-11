import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/store/features/provider'
import Providers from '../Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developers Meeting',
  description: `
  Developers Meeting is a vibrant and dynamic online platform crafted exclusively for software developers, coding enthusiasts, and tech aficionados. Our mission is to create a global community that fosters collaboration, knowledge sharing, and innovation within the ever-evolving world of technology.

  **Connect with Like-Minded Developers:**
  Join a diverse community of developers from around the world who share a passion for coding and technology. Build meaningful connections, expand your professional network, and engage with individuals who inspire and challenge you.

  **Showcase Your Projects:**
  Unleash your creativity and showcase your coding prowess by sharing detailed information about your latest projects. Whether you're working on web development, mobile apps, machine learning, or any other software-related field, Developers Meeting is the perfect stage for your innovations.

  **Collaborative Chat Groups:**
  Dive into collaborative discussions by creating or joining chat groups focused on specific projects, programming languages, or technology domains. Share insights, exchange ideas, and find potential collaborators for your next big venture.

  **Filtered Content for Personalized Experience:**
  Tailor your experience by filtering posts based on your interests, preferred programming languages, and technology domains. Discover projects and discussions that align with your expertise and aspirations.

  **Empowering Developer Connections:**
  Every post on Developers Meeting has the potential to create a dedicated chat group, enabling deeper collaboration and interaction among developers. Connect with like-minded individuals, explore new opportunities, and embark on exciting coding ventures together.

  **Your Personal Developer Space:**
  Each developer has a dedicated profile page to showcase their skills, projects, and professional journey. Build a comprehensive developer portfolio and make a lasting impression on the community.

  **Join the Coding Revolution:**
  Developers Meeting is not just a platform; it's a coding revolution. Whether you're a seasoned developer or just starting your coding journey, this is the place to connect, collaborate, and code together.

  Join Developers Meeting today and be part of a global movement that celebrates the spirit of innovation and the power of collaborative coding.
  `,
  keywords: [
    'developers', 
    'coding community', 
    'software projects', 
    'collaboration platform', 
    'web development', 
    'programming languages', 
    'developer networking', 
    'coding collaboration', 
    'tech community',
    'code sharing',
    'project showcase',
    'developer profiles',
    'tech enthusiasts',
    'code collaboration',
    'programming collaboration',
    'innovative projects',
    'coding network',
    'software development community',
    'developer connections',
    'coding discussions',
    'programming collaboration platform',
    'coding partnerships',
    'open-source projects',
    'technology networking',
    'coding events',
    'developer collaboration platform',
    'software engineering',
    'coding skills exchange',
    'code collaboration community',
    'software development networking',
    'developer portfolio',
    'code collaboration projects',
    'programming skills sharing',
    'coding mentorship',
    'developer meetups',
    'coding challenges',
    'tech innovation',
    'coding projects exchange',
    'developer forum',
    'developer showcase',
    'collaborative coding',
    'coding community platform',
    'tech networking events',
    'software development trends',
  ],
  authors: [{name: 'Developers Meeting', url: 'https://developers-meeting.com'}],
  category: 'Software Development',
  applicationName: 'Developers Meeting',
  bookmarks: "https://developers-meeting.com",
  abstract: 'Explore a collaborative platform for developers to connect, showcase projects, and engage in meaningful collaborations. Join Meet Developers to become part of a global coding community.',
  appLinks: {web: [{url: 'https://developers-meeting.com'}]},
  verification : {google: "google-site-verification=sv75xpk4obenyFxnC1WXYB3wvn5RBeF5jaPayg6avsM"},
  classification: 'Technology/Developer Community',
  creator: 'Jessitoi',
  robots: 'index, follow',
  publisher: 'Developers Meeting',
  generator: 'Developers Meeting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="icon" href="/../icon.ico" />
      <body className={inter.className}>
        <ReduxProvider>
          <Providers>{children}</Providers>
        </ReduxProvider>
      </body>
    </html>
  )
}
