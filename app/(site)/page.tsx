import { Metadata } from 'next'
import Banner from '@/components/Banner'
import BlogPostSection from '@/components/BlogPostSection'
import CoachIntroductionSection from '@/components/CoachIntroductionSection'
import VideoDirPostSection from '@/components/VideoDirPostSection'



export default function Home() {
  return (
    <>
    <Banner/>
    <BlogPostSection/>
    <CoachIntroductionSection/>
    <VideoDirPostSection/>
    </>

  )
}
