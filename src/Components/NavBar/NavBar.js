import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='nav-bar-container'>
      <div className="nav-bar">
        <div className="nav-head">
            <h2>Chat App</h2>
        </div>
        <div className='sigin-btn'>
            <button>Sigin</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
