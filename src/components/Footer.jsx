import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer ft'>
        <div className='Footer-h1'>
        <p className='h4-accardion-details'>ABOUT FLOWERKNOWS</p>
        <ul className='Footer-block'>
            <li>
                <a href="https://flowerknows.co/pages/aboutflowerknows">Brand Story</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/membership">Loyalty</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/affiliates">Affiliate Program</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/student-discount">Student Discount</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/flowerknows-teacher-healthcare-discount">Teacher HealthCare Discout</a>
            </li>
        </ul>
        </div>
        <div className='Footer-h1'>
        <p className='h4-accardion-details'>CUSTOMER SERVISE</p>
        <ul className='Footer-block'>
            <li>
                <a href="https://flowerknows.aftership.com/">Track Your Order</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/faqs">FAQ</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/contactus">Cuntact us</a>
            </li>
        </ul>
        </div>
       <div className='Footer-h1'>
        <p className='h4-accardion-details'>CUSTOMER CARE</p>
        <ul className='Footer-block'>
            <li>
                <a href="https://flowerknows.co/pages/shipping-policy">Shipping Policy</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/student-discount">Refund Policy</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/student-discount">Promotion Terms & Conditions</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/privacy-policy">Privacy Policy</a>
            </li>
            <li>
                <a href="https://flowerknows.co/pages/terms-and-conditions">Terms and Conditions</a>
            </li>
        </ul>
       </div>
       <div className='Footer-h1'>
       <p className='small-hide'>
            <div></div>
        </p>
       </div>

      <div className='Footer-h1'>
      <p className='h4-accardion-details'>NEWSTELLER</p>
        <input id="InputtFooter-email" type="email" name="contact[email]" placeholder="Enter email here" />
        <div className='FooterInput'>
         <p>Join to get special offers,<br /> free gifts, and once-in-a <br />-lifetime deals</p>
         <br />
         <p>Interested in becoming <br /> Flower Knows authorized <br /> retailers?</p>
         <p>&gt;&gt; contact <br /> <a href="mailto:partnership@flowerknows.net" title="mailto:partnership@flowerknows.net">partnership@flowerknows.net</a>.</p>
        </div>
        <ul className='Footer-block-icon'>
        <li> 
         <a href="https://www.facebook.com/flowerknowsofficial/">
          <FacebookIcon/>
         </a>
        </li>
        <li>
          <a href="https://twitter.com/flowerknows_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <TwitterIcon/>
          </a>
        </li>
        <li>
            <a href="https://www.pinterest.com/flowerknowsglobal/"> 
            <PinterestIcon/>
            </a>
        </li>
            
          <li> <a href="https://www.instagram.com/flowerknows_global/">
           <InstagramIcon/>
           </a>
         </li>
        <li> <a href="https://www.youtube.com/channel/UCGJidBBfYZsmsxNwarWQYsA">
          <YouTubeIcon/>
          </a>
        </li>
     </ul>
      </div> 
      <hr/>
          <div className='footer-copyright'>
         <small class="copyright__content">© 2023, <a href="/" title="">Flower Knows  </a>. All rights reserved.</small>
         </div>
     </div>)}

     export default Footer;