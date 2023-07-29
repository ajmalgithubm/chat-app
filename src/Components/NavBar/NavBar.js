import React from 'react';
import './NavBar.css';
import { userContext } from '../../App';
import { useContext } from 'react';
import {auth} from '../../Firebase';
import { signOut } from 'firebase/auth';
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
function NavBar() {
  const {user} = useContext(userContext);
  const siginOutUser =() => {
    if(user){
      signOut(auth).then(() => {
        console.log("SigOut SuccessFully");
      })
    }else{
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
      console.log("user : "+ user);
    }
  }
  return (
    <div className='nav-bar-container'>
      <div className="nav-bar">
        <div className="nav-head">
            <h2>Chat App</h2>
        </div>
        <div className='sigin-btn'>
            <button onClick={siginOutUser}>{user ? "Sigout" : "Sigin"}</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
