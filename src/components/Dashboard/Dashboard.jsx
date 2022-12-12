import './dashboard.scss';
import React from 'react'
import { Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='contentbody'>
        <span className='dashboardheader'>VOICE TONE INTELLGENCE FOR WALL STREET</span>
        <p className='content'>
        A NEW CATEGORY OF INVESTOR INSIGHTS DERIVED FROM THE VOICE TONE OF EXECUTIVES
        </p>
        
        </div>
        <div className='descriptionbody'>
        <p className='desc'>Where there's transparency, there's truth and we're reading the way. 
            Add additional intelligence for further clarity on tomorrow's volatile market with Hellos' comprehend product suite.
             Portfolio managers, researchers,systematic teams and corporate investor relations can now leverage the power of voice to increase confidence in trading decisions
             </p>

             <p className='descrption'>
             Set up a 15 minute consultation, on us, and we'll review your equity of choice Click the demo button below to get started.
             </p>
             </div>
             <Button variant="outline-warning" className='dashboardBtn' size='lg'>Get Started</Button>{' '}
    </div>
  )
}

export default Dashboard