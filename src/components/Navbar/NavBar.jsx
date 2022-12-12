import React, { useState } from 'react'
import './Navbar.scss'
function NavBar() {
  const [isScroll,setSCroll]=useState(false);
  window.onscroll=()=>{
    setSCroll(window.pageYOffset===0?false:true);
    return () => (window.onscroll = null);
  }
  return (
    <div className={isScroll ? 'navbar scrolled': 'navbar'}>
      <div className='container'>
        <div className='left'>
        <img src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
         alt="altimd"/>
         <span className='navbarmainlinks'>Documentation</span>
         <span className='navbarmainlinks'>Api</span>
         <span className='navbarmainlinks'>White Panel</span>
         <span>Composistes</span>
         <span>Press</span>
        </div>
        <div className='right'>
          <span>Team + advisor</span>
          <span>Request a Demo</span>
          <span>+1213842-3218</span>
        </div>
      </div>
      
    </div>
  )
}

export default NavBar