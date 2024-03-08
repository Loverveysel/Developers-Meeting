import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { ReduxProvider } from '@/store/features/provider'
import Providers from '@/app/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>  

        <body className={inter.className}>
            <ReduxProvider>
            <Providers>{children}</Providers>
            </ReduxProvider>
        </body>
    </html>
  )
}
