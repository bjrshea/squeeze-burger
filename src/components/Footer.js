import React from "react";
import '../assets/styles/Footer.scss';
import googleIcon from '../assets/sketch/google_social_icon.png';
import fbIcon from '../assets/sketch/fb_social_icon.png';
import twitterIcon from '../assets/sketch/twitter_social_icon.png';
import instaIcon from '../assets/sketch/insta_social_icon.png';

function Footer(){
  return (
    <div className="FooterStyles">
      <ul className="icon-list">
        <li className="icon-list"><img src={fbIcon}/></li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/squeezeburgertruck">
        <li className="icon-list"><img src={instaIcon}/></li>
        </a>
        <li className="icon-list"><img src={twitterIcon}/></li>
        <li className="icon-list"><img src={googleIcon}/></li>
      </ul>
    </div>
  );
}

export default Footer;
