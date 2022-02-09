import react, { useState } from 'react'
import emailjs from 'emailjs-com'
import './home.scss'

import Footer from '../../components/footer/Footer'
import Project from '../../components/project/Project'
import Tag from '../../components/project/Tag'

import BaseInput from '../../components/inputs/BaseInput'
import BaseTextarea from '../../components/inputs/BaseTextarea'
import BaseButton from '../../components/inputs/BaseButton'

import ImageMe from '../../media/images/me.png'
import ImageContact from '../../media/images/contact.png'

import IconEYE from '../../media/icons/iconEYE.png'
import IconFB from '../../media/icons/iconFB.png'
import IconEMAIL from '../../media/icons/iconEMAIL.png'
import IconGITHUB2 from '../../media/icons/iconGITHUB2.png'
import IconX from '../../media/icons/iconX.png'
import IconV from '../../media/icons/iconV.png'
// Project images
import DBS1 from '../../media/images/dbs1.png';
import DBS2 from '../../media/images/dbs2.png';
import DBS3 from '../../media/images/dbs3.png';
import SZKLARZ1 from '../../media/images/szklarz1.png';
import SZKLARZ2 from '../../media/images/szklarz2.png';
import SZKLARZ3 from '../../media/images/szklarz3.png';


const Home = function(){

  const [contact, setContact] = useState({
    email: "",
    message: "",
    caption: ""
  })

  const [contactErr, setContactErr] = useState({
    email: "",
    message: "",
    caption: ""
  }) 

  const [emailStatus, setEmailStatus] = useState("")

  const submit = (e:any) => {
    e.preventDefault()
    
    if(contact.email === ""){
      setContactErr({ ... contactErr, email: "This field is required"})
      return
    }
    if(contact.message === ""){
      setContactErr({ ... contactErr, message: "This field is required"})
      return
    }
    if(contact.caption === ""){
      setContactErr({ ... contactErr, caption: "This field is required"})
      return
    }
    console.log(contact.email,contact.message,contact.caption)

    emailjs.send("service_zezv6fn","template_6ka0wyp",{
      email: contact.email,
      message: contact.message,
      caption: contact.caption,
      }, "user_IJ6cZpOkFROZ1AF8EfkAx"
      ).then( () => setEmailStatus("200"))
      .catch( () => setEmailStatus("400"));

  }

  return(
    <>
      <div className='home'>

        <div className='content'>

          <div className='heading'>
            <img src={ImageMe} alt="ME"></img>
            <div className='text'>
              <h2 className='subtitle'>Frontend Developer</h2>
              <h1>DOMINIK</h1>
              <h1>MISIEK</h1>
              <div>
                <button><img src={IconEYE} alt=""/>SEE MY WORK</button>
                <a>contact me</a>
              </div>
            </div>
          </div>

          
          <div className='tags'>
            <h3>Already know</h3>
            <Tag value='REACT'/>
            <Tag value='HTML'/>
            <Tag value='JAVA SCRIPT'/>
            <Tag value='CSS'/>
            <Tag value='SASS'/>
            <Tag value='BOOTSTRAP'/>
            <Tag value='ADOBE PHOTOSHOP'/>
            <Tag value='ADOBE XD'/>
            <Tag value='FIGMA'/>
          </div>
          <div className='tags'>
            <h3>Still learn</h3>
            <Tag value='TYPESCRIPT'/>
            <Tag value='REDUX'/>
            <Tag value='GIT'/>
            <Tag value='VUE'/>
            <Tag value='MATERIAL UI'/>
          </div>
          <p className='aboutme'>
          I’m self-taught Frontend Developer and UI/UX Designer. I create good looking website and applications. My main tool is REACT, but I still learn other popular technologies. If you have an idea for new, revolutionary app or you just looking for your personal website - don’t be afraid to contact me. 
          I’m sure we definetly find a common language and create an awesome app!
          </p>


        </div>


        <div className='primary-rect'></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1B222C" fill-opacity="1" d="M0,160L120,165.3C240,171,480,181,720,154.7C960,128,1200,64,1320,32L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
      </div>
      <div className='projects'>

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

      <div className='contact'>
        <div className='text'>
            DON'T BE <br/>
            AFRAID TO <br/>
            CONTACT <br/>
            ME
            <div className='links'>
              <a className='link'><img src={IconEMAIL} alt="FB" />dominikmisiek02@gmail.com</a>
              <a className='link'><img src={IconGITHUB2} alt="FB" />dmisiek</a>
              <a className='link'><img src={IconFB} alt="FB" />dominik.misiek.5</a>
            </div>
            <img src={ImageContact} alt="contact" className='vector' />
        </div>
        <form onSubmit={submit}>
          { emailStatus !== "" &&
          <div className='errorInfo'>
            {
              emailStatus === "200"
              ?
                <>
                  <img src={IconV} alt="SUCCESS" />
                  <h1>EMAIL SENT</h1> 
                  <p>THANK YOU TO CONTACT ME</p>
                </>
              :
                <>
                  <img src={IconX} alt="ERROR" />
                  <h1>ERROR</h1> 
                  <p>SOMETHING WENT WRONG</p>
                </>
            }
          </div>
          }
          <BaseInput 
            handler={(e:any) => setContact({ ...contact, email: e.target.value })} 
            label="E-MAIL" 
            type="email"
            error={contactErr.email}
          />
          <BaseTextarea 
            handler={(e:any) => setContact({ ...contact, message: e.target.value })}  
            label="MESSAGE" 
            error={contactErr.message}
          />
          <div className='submitLine'>
            <BaseInput  
              handler={(e:any) => setContact({ ...contact, caption: e.target.value })} 
              label="CAPTION" 
              type="text" 
              error={contactErr.caption}
            />
            <BaseButton label="SEND" type="submit" />
          </div>
        </form>
      </div>
      

      <Footer />
    </>
  )
}

export default Home;