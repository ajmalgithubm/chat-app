import React from 'react';
import './Sigin.css';
import {auth} from '../../Firebase';
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
function Sigin() {
  const siginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }
  return (
    <div>
      <div className="sigin-container">
        <div className="sigin">
            <button onClick={siginWithGoogle}>SigIn with google</button>
        </div>
      </div>
    </div>
  )
}

export default Sigin
