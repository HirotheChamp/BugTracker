import React, {useEffect, useState} from 'react'
import axios from 'axios';

import '../static/css/CurrentBug.css'


function CurrentBug() {
  const [bugs, setBugs] = useState(null)

const [refresh, setRefresh] = useState(true)

useEffect(()=>{
  axios.get('http://localhost:8000/api/bug/')
      .then(res=>setBugs(res.data))
      .catch(err => console.error(err))
},

// [refresh]
);

const deleteBug = (bugId) => {
  axios.delete('http://localhost:8000/api/bug/' + bugId)
      .then(res => {
         
        // setRefresh(!refresh)
      })
      .catch(err => console.error(err));
}
  return (
    
    <div className='current-bugs'>
       {   bugs && bugs.map((bug, i)=>(
        <div className='indv-bug'>
           <p>
              <button onClick={(e)=>{deleteBug(bug._id)}}className='close-bug'>Delete Bug</button> 
              </p>
            <p>Assigned<span>Username</span></p>

            <p>Priority<span>{bug.priority}</span></p>

            <p>Description </p>

            <p className='description-text'>
            {bug.description}
            </p>

            <hr/>
            
            
        </div>
      
        )) 
       }
    </div>
    )
    }

export default CurrentBug;