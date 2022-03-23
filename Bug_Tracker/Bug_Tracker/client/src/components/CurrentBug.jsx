import React, {useEffect, useState} from 'react'
import '../static/css/CurrentBug.css'


function CurrentBug() {
const [addIssue, setAddIssue] = useState(true);

  return (
    <div className='current-bugs'>
        <div className='indv-bug'>
            <p className='close-bug'>Close Bug</p>
            <p>Assigned<span>Username</span></p>

            <p>Priority<span>High</span></p>

            <p>Description </p>

            <p className='description-text'>
            fdafdafdafdafdasfadsfdafdafdasfadsfdafda 
              fdasfdasfdsafadsfdas
              fdsafasdfdasfdasfasfdasfdasf
              dfaf
            </p>

            <hr/>
        </div>
     

        <div className='indv-bug'>
            <p className='close-bug'>Close Bug</p>
            <p>Assigned<span>Username</span></p>

            <p>Priority<span>High</span></p>

            <p>Description </p>

            <p className='description-text'>
            fdafdafdafdafdasfadsfdafdafdasfadsfdafda 
              fdasfdasfdsafadsfdas
              fdsafasdfdasfdasfasfdasfdasf
              dfaf
            </p>

            <hr/>
        </div>

        <div className='indv-bug'>
            <p className='close-bug'>Close Bug</p>
            <p>Assigned<span>Username</span></p>

            <p>Priority<span>High</span></p>

            <p>Description </p>

            <p className='description-text'>
            fdafdafdafdafdasfadsfdafdafdasfadsfdafda 
              fdasfdasfdsafadsfdas
              fdsafasdfdasfdasfasfdasfdasf
              dfaf
            </p>

            <hr/>
        </div>
    </div>
  )
}

export default CurrentBug;