import react from 'react'
import './home.scss'
import HeroImage from '../../media/images/hero.png'
import Footer from '../../components/footer/Footer'
import Project from '../../components/project/Project'

// Project images
import DBS1 from '../../media/images/dbs1.png';
import DBS2 from '../../media/images/dbs2.png';
import DBS3 from '../../media/images/dbs3.png';
import SZKLARZ1 from '../../media/images/szklarz1.png';
import SZKLARZ2 from '../../media/images/szklarz2.png';
import SZKLARZ3 from '../../media/images/szklarz3.png';


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

        <Project img1={DBS1} img2={DBS2} img3={DBS3} 
          to={"https://deadbystats.eu"}
          title={"DEADBYSTATS.EU"}
          desc={"Fanlike project that allows players of Dead by Daylight to check & compare their stats and save they progress. I created frontend only."}
          tags={["REACT", "CSS"]}
        />
        <Project img1={SZKLARZ1} img2={SZKLARZ2} img3={SZKLARZ3} 
          to={"https://szklarzratajczyk.pl"}
          title={"SZKLARZ RATAJCZYK.PL"}
          desc={"Commercial website to local company. It includes their services, contact, location and photos from their realizaiotns. I used Firebase for backend here."}
          tags={["REACT", "CSS"]}
        />

      </div>
      <Footer />
    </>
  )
}

export default Home;