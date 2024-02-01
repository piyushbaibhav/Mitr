import React from 'react'
import Hamburger from '../components/Hamburger'

export default function Portal() {
  return (
    <>
    <div className='flex'>    
      <div className='ml-96 mt-10 pb-4 mb-72'>Technical Integrations soon to be included in this App <br/>
      Firebase for backend <br/>
       For Real-time Database <br/>
       Authentication <br/>
       Cloud Functions <br/>
       File Storage <br/>

      </div>
      <div className="relative -z-10"><Hamburger/></div>
      
    </div>

    </>
  )
}
