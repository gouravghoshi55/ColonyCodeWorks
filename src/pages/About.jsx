import { Helmet } from 'react-helmet-async'
import AboutHero from '../components/About/AboutHero'
import CompanyStory from '../components/About/CompanyStory'
import MissionVision from '../components/About/MissionVision'
import Founders from '../components/About/Founders'
import TeamValues from '../components/About/TeamValues'
import Journey from '../components/About/Journey'
import CTASection from '../components/About/CTASection'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Colony Code Works - Our Story & Team</title>
        <meta 
          name="description" 
          content="Meet the team behind Colony Code Works. Learn about our mission, vision, founders, and the story of how we're building digital products that scale." 
        />
        <meta property="og:title" content="About Colony Code Works" />
        <meta property="og:description" content="Discover the team and story behind Colony Code Works — a modern product engineering company." />
      </Helmet>

      <main className="overflow-x-hidden">
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <Founders />
        <TeamValues />
        <Journey />
        <CTASection />
      </main>
    </>
  )
}

export default About