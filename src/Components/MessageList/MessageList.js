import React, { useEffect, useState, useRef } from 'react'
import './MessageList.css';
import Message from '../Message/Message';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../../Firebase';
function MessageList() {
    const [messageList, setMessageList] = useState([]);
    useEffect(() => {
        const scrollDiv = () => {
            const messageList = document.getElementById('message-list');
            if (true) {
                messageList.scrollTop += 10;
            }
            console.log("scroll div function is calling");
        }
        setInterval(scrollDiv,3000);
        return () => scrollDiv()
    }, [])
useEffect(() => {
    const q = query(
        collection(db, 'messages'),
        orderBy('createdAt', 'desc'),
        limit(50)
    )
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        const fetchMessages = [];
        QuerySnapshot.forEach((doc) => {
            fetchMessages.push({ ...doc.data(), docId: doc.id });
        })
        const sortedMessages = fetchMessages.sort(
            (a, b) => a.createdAt - b.createdAt
        )
        setMessageList(sortedMessages);
        console.log(sortedMessages)
    })
    return () => unsubscribe;
}, []);
return (
    <div>
        <div className="message-list" >
            <div className="message" id='message-list'>
                {
                    messageList.map(item => {
                        return (
                            <Message {...item} />
                        )
                    })
                }
            </div>
        </div>

    </div>
)
}

export default MessageList
