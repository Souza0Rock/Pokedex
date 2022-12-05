import SectionHome from '../components/SectionHome'

export default function Home() {

  if (typeof window !== 'undefined') {
    document.title= 'Pokemon' 
  }

  return (
    <SectionHome />
  )
}
