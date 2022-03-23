import React, {useEffect, useState} from 'react'
import '../static/css/AddBug.css'


function AddBug() {
const [addIssue, setAddBug] = useState(true);

  return (
    <div className='add-bug'>
      <form>
          <label>
              Description
              <input type='text' placeholder='Description of Bug...'/>
          </label>
          <label>
              Assign To
          <select name="forDev" id="forDev">
                    <option value="Brock">Brock</option>
                    <option value="Phil">Phil</option>
                    <option value="Bruv">Bruv</option>
                    <option value="Myguy">Myguy</option>
                </select>
                </label>
                <label>
                    Priority 
                <select name="priority" id="priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="mandatory">Mandatory</option>
                </select>
                </label>
                <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddBug;