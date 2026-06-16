import { HelmetProvider, Helmet } from 'react-helmet-async'
import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats/Stats'
import Services from '../components/Services/Services'
import Products from '../components/Products/Products'
import Process from '../components/Process/Process'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Technologies from '../components/Technologies/Technologies'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import Contact from '../components/Contact/Contact'
import Newsletter from '../components/common/Newsletter'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Colony Code Works | Building Digital Products That Scale</title>
        <meta name="description" content="Colony Code Works — Modern product engineering company building SaaS platforms, AI solutions, enterprise applications, and custom digital ecosystems." />
      </Helmet>

      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Process />
        <WhyChooseUs />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
    </>
  )
}

export default Home