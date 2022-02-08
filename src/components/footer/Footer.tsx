import React from "react";
import './Footer.scss'

import IconGITHUB from '../../media/icons/iconGITHUB.png'

const Footer = function(){

  return(
    <div className="footer">
      
      <div className="content">
        <div className="left">
          <h1>DOMINIK MISIEK</h1>
          <a href="https://github.com/dmisiek" target="_blank">
            <img src={IconGITHUB} alt="github" />
            <p>dmisiek</p>
          </a>
        </div>

        <div className="right">
          <p>HOME</p>
          <p>WORK</p>
          <p>CONTACT</p>
          <p>© 2022</p>
        </div>
      </div>

    </div>
  )
}

export default Footer;