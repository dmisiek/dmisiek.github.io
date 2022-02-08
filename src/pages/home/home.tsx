import react from 'react'
import './home.scss'
import HeroImage from '../../media/images/hero.png'
import Footer from '../../components/footer/Footer'
import Project from '../../components/project/Project'

const Home = function(){
  return(
    <>
      <div className='nav'>
        <p>HOME</p>
        <p>ABOUT ME</p>
        <p>MY WORKS</p>
        <p>CONTACT</p>
      </div>
      <div className='home'>

        <div className='home_article'>
          <p>Junior Frontend Dev</p>
          <h1>DOMINIK</h1>
          <h1>MISIEK</h1>
        </div>

        <img src={HeroImage} alt="hero" className='home_img' />

        <div className='home_triangleOne'></div>
        <div className='home_triangleTwo'></div>
        <div className='home_triangleThree'></div>

      </div>
      <div className='h100'>

        <Project />

      </div>
      <Footer />
    </>
  )
}

export default Home;