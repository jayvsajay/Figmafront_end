import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Figmapage from './components/Figmapage';
import Price from './components/pricing/Price';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { checkUserLoggedIn } from './components/magic/magic';
function App() {
  // const [user, setUser] = useState({ isLoggedIn: null, email: '' });
  // const [loading, setLoading] = useState();
  // useEffect(()=>{
  //   const validateuser =async()=>{
  //     setLoading(true);
  //     try {
  //       await checkUserLoggedIn(setUser);
  //       setLoading(false)
  //     }
  //     catch(e){
  //       console.log(e)
  //     }
  //   }
  //   validateuser();
  // },[user.isLoggedIn])
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Figmapage/>}/>
          <Route path='/pricing' element={<Price/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
