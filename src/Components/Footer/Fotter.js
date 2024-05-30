import React from 'react'
import './index.css'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


export default function Fotter() {
  return (

    <div class="fotter">
    <div class="footer-content">
        <p>First Dot Group World Business.com</p>
        <p>© First Dot GroupWorldBusiness.com | All Rights Reserved</p>
    </div>
    <div class="follow-us">
        <p>Follow Us:</p>
        <div class="social-icons">
              <a href="#" target="_blank"><i class="fab fa-facebook-f">
              <img src= "https://cdn-icons-png.flaticon.com/128/4138/4138124.png"width="50" height="50" /></i></a>
              
              <a href="#" target="_blank"><i class="fab fa-facebook-f">
             <img src= "https://cdn-icons-png.flaticon.com/128/1384/1384060.png"width="50" height="50" /></i></a>
              
              <a href="#" target="_blank"><i class="fab fa-twitter">      
              <img src= "https://cdn-icons-png.flaticon.com/128/5968/5968764.png"width="50" height="50" /></i></a>

             <a href="#" target="_blank"><i class="fab fa-linkedin-in"> 
             <img src= "https://cdn-icons-png.flaticon.com/128/5969/5969020.png"width="50" height="50" /></i></a>
        </div>
    </div>
    <div class="contact-info">
        <p>Contact Us:</p>
        <p>Email: info@firstdotgroupworldbusiness.com</p>
        <p>Phone: +44 7402 878XXX</p>
    </div>
    <div class="subscribe">
        <p>Subscribe to our newsletter:</p>
        <form action="#" method="post">
            <input type="email" name="email" placeholder="Your Email"></input>
            <button type="submit">Subscribe</button>
        </form>
    </div>
</div>

  )
}
