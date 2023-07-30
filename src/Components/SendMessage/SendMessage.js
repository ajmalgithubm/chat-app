import React, { useState } from 'react';
import './SendMessage.css';
import { db } from '../../Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { userContext } from '../../App';
import addImg from '../../Assets/download (1).png'
function SendMessage({ scroll }) {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState();
  const { user } = useContext(userContext);
  const addMessage = async () => {
    if (message.trim() === '') {
      alert('Enter the text');
      return
    }
    await addDoc(collection(db, 'messages'), {
      text: message,
      id: user.uid,
      name: user.displayName,
      avatar: user.photoURL,
      createdAt: serverTimestamp()
    })

  }

  return (
    <div>
      {/* Pop Up div Occur Here*/}
      <div class="modal fade"  id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div className="modal-content modalContainer">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={
                (e) => {
                  const myModal = document.getElementById("myModal");
                  myModal.classList.add("show");
                  myModal.style.display = "none";
                  setImage(null);
                }
              }>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body text-center">
              {
                image&&<img src={URL.createObjectURL(image)} alt="" srcset=""  style={{width:'30vw'}}/>
              }
            </div>

            <div class="modal-footer">
              <button type="button" className='sendButtonPopUp' data-dismiss="modal">Send</button>
            </div>
          </div>
        </div>
      </div>
      {/* Send Messages Bar*/}
      <div className="send-message">
        <div className="send-message-input">
          <input type="text" id="inputTextTag" placeholder='text the messages...' onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="send-message-image" style={{ padding: '0 10px' }}>
          <label for="inputTag">
            <img src={addImg} width={30} height={30} alt="" id='imgInputTag' />
            <input accept="image/png, image/jpg, image/gif, image/jpeg" id="inputTag" type="file" onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
              if (file) {
                const myModal = document.getElementById("myModal");
                myModal.classList.add("show");
                myModal.style.display = "block";
              }
            }} />
          </label>
        </div>
        <div className="send-message-btn">
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default SendMessage
