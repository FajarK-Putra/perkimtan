import HeroSection from '../components/templates/HeroSection'
import NewsSection from '../components/templates/NewsSection'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
    </>
  )
}
