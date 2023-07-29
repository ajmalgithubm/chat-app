import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import MessageList from '../../Components/MessageList/MessageList'
import SendMessage from '../../Components/SendMessage/SendMessage'

function ChatPage() {
  return (
    <div>
      <NavBar/>
      <MessageList/>
      <SendMessage/>
    </div>
  )
}

export default ChatPage
