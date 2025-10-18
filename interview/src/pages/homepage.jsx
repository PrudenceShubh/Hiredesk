import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Mainpage from './mainpage'


const Homepage = () => {
  const [user, setUser] = useState("Interviewer")
  console.log(user) 
  
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <div><p className='text-4xl p-5 font-semibold'>WHO ARE YOU</p></div>
      <div className='flex  gap-5'>
        <Link to={`/mainpage?user=Interviewer`}><div><button className='bg-green-700 font-semibold cursor-pointer hover:bg-green-500 rounded-xl  p-5 text-3xl' onClick={() => setUser("Interviewer")}>Interviewer</button></div></Link>
        <Link to={`/mainpage?user=interviewing`}><div><button className='bg-green-700  font-semibold cursor-pointer hover:bg-green-500 rounded-xl p-5 text-3xl' onClick={() => setUser("interviewing")}>interviewing</button></div></Link>
      </div>
    </div>
  )
}

export default Homepage