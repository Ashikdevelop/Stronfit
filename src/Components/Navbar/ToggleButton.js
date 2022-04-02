
import React,{ useState } from 'react'
import './ToggleButton.css'

    const ToggleButton = () => {
const [status, setStatus] = useState('close')
    
  return (
      <nav>
  <div 
  className="togglebutton"
  role="button" onClick={()=> setStatus(status === 'open' ? 'close' : 'open')}
  >
      <i className={status}></i>
      <i className={status}></i>
      <i className={status}></i>
    </div>
      </nav>
  
  )
}

export default ToggleButton
