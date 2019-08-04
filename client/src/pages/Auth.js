import React, { useState, useEffect } from 'react'
import { SERVER_AUTH } from '../constant'
import axios from 'axios'


const Auth = () => {
  const [users, setUsers] = useState([])
  const fetchUser = async () => {
    const result = await axios(`${SERVER_AUTH}/test/users`)
    const { users } = result.data
    setUsers(users)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      Users
      {users.map(({id, name}) =>
        <blockquote key={id}>
          <p>{name}</p>
        </blockquote>
      )}
    </>
  )
}

export default Auth
