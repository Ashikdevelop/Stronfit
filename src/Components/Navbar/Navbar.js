import React,{ useState } from 'react'
import './Navbar.css'
import ToggleButton from './ToggleButton';
function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    
  return (
    <div className="navbar">
      <div className="leftSide">
          <h1 href="/">Stronfit</h1> 
      </div>
      <div className="centerSide">
          <div className="links" id={showLinks ? "hidden"  : ""}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/workout">How We Work</a>
          <a href="/workouts">Workouts</a>
          <a href="/more">More</a>
          </div>
      </div>
      <div className="rightSide">
      <div  className="button"onClick={()=> setShowLinks(!showLinks)}> <ToggleButton/> </div>
      </div>
    </div>
  )
}

export default Navbar
