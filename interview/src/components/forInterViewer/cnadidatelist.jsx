import React, { useState } from 'react'

const Cnadidatelist = async() => {
  const [data,setdata]=useState([])
  const listofjob= await fetch("/api/")
  return (
    <div>
      <div>
        
      </div>
    </div>
  )
}

export default Cnadidatelist
