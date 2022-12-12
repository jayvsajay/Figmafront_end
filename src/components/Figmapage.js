import React, { useState } from 'react'
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard/Dashboard';
import NavBar from './Navbar/NavBar';
import Login from './Login/Login';
function Figmapage() {
    const [show, setShow] = useState(true);
  return (
    <div>
        <NavBar/>
      <Home/>
      <Dashboard/>
      <Login show={show} handleClose={()=>setShow(false)} />
      <Footer/>
    </div>
  )
}

export default Figmapage