// import React from 'react'
// import './footer.css'
// import gpt3Logo from  '../../assets/logo.svg'

// const Footer = () => {
//   return (
//     <div className='gpt3__footer section__padding'>
//       <div className='gpt3__footer-heading'>
//         <h1 className='gradient__text'>Do you want to step inot future before others</h1>
//       </div>

//       <div className='gpt3__footer-btn'>
//         <p>Request Early Access</p>
//       </div>

//       <div className='gpt3__footer-links'>
//       <div className='gpt3__footer-links_logo'>
//         <img src={gpt3Logo} alt="gpt3_logo" />
//         <p>Rahul Mohuture, <br/>All Rights Reserved</p>
//       </div>


//       <div className='gpt3__footer-links_div'>
//         <h4>Links</h4>
//         <p>Overons</p>
//         <p>Social Media</p>
//         <p>Counters</p>
//         <p>Contact</p>
//       </div>

//       <div className='gpt3__footer-links_div'>
//         <h4>Companny</h4>
//         <p>Terms & Conditions</p>
//         <p>Privacy Policy</p>
//         <p>Contact</p>
//       </div>

//       <div className='gpt3__footer-links_div'>
//         <h4>Get in Touch</h4>
//         <p>Rahul Mohuture</p>
//         <p>Social Media</p>
//         <p>7770084549</p>
//       </div>
//     </div>

//     <div className='gpt3__footer-copyright'>
//       <p>@2022 GPT3. All Right Reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer











import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>RAHUL MOHIUTURE <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>RAHUL MOHUTURE</p>
        <p>7770084548</p>
        <p>rahulmohature0421@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;