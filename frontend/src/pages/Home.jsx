import About from '../component/home/About'

import Footer from '../component/home/Footer'
import Hero from '../component/home/Hero'

const Home = () => {
  return (
    <div className='bg-purple-300'>
      <Hero/>
      <About/>
      <hr/>
      <Footer/>
    </div>
  )
}

export default Home
