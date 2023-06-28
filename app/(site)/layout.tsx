import '../../style/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title:"weightliftingcollege",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="/logo.jpg"/>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
