import './footer.scss';
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {SiAmazonalexa} from 'react-icons/si'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialIcons'>
            <span className='icons'>
            <FaTwitter size={40}/>
            </span>
            <span className='icons' ><FaLinkedin size={40}/></span>
            <span className='icons' ><SiAmazonalexa size={40}/></span>
        </div>
        <div className=' footertext'>
        <span>Helios Life Enterprises,Inc. All rights reserved.</span>
        <span className='barcket'>|</span>
        <span className='terms'>Terms and Conditions</span>
        </div>
    </div>
  )
}

export default Footer