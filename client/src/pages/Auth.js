import React, { useState, useEffect } from 'react'
import { SERVER_AUTH } from '../constant'
import axios from 'axios'


const Auth = () => {
  const fetchUser = async () => {
    const result = await axios(`${SERVER_AUTH}/test/users`)
    const { users } = result.data
    setUsers(users)
  }

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      Hello {SERVER_AUTH}
      {users.map(({id, name}) =>
        <blockquote key={id}>
          <p>{name}</p>
        </blockquote>
      )}
    </>
  )
}

export default Auth
