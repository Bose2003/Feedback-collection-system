import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const User = () => {

  useEffect(()=>{
    axios.get('http://localhost:3001/users1')
        .then((res)=>{
            setUserList(res.data)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
  },[])

  const [userlist, setUserList] = useState([])

  return (
    
    <div className='user-container'>
        <div className='single-user'>
        <table style={{marginLeft:'600px'}}>
        <thead>
        <th>Feedback </th>
        <th>Event Name  </th>
        <th>Name </th>
        <th>Phone No </th>
       </thead>
       <tbody>
       {userlist.map(x=>(
       <tr>
       <td>{x.image}</td>
       <td>{x.id}</td>
       <td>{x.name}</td>
       <td> {x.age}</td>
       </tr>
       ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}
