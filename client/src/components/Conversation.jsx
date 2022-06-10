import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Conversation(props) {
  const [user, setUser] = useState([])

  useEffect(() => {
    const userId = props.conversation.members.find(
      (m) => m !== props.currentUser._id
    )

    const getUser = async () => {
      try {
        const res = await axios('/api/users?userId=' + userId)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [props.conversation, props.currentUser])
  return (
    <div className={`conversation ${props.active ? 'active' : ''}`}>
      <img src={user.user_ava} alt='image' />
      <div className='title-text'>{user.username}</div>
      <div className='created-date'>3 Minute ago</div>
      <div className='conversation-message'>Con cho nay</div>
    </div>
  )
}

export default Conversation
