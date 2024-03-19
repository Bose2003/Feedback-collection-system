import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const User = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Feedback</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {post.map(x => (
            <tr key={x._id}>
              <td><img src={x.image} alt={x.name} width={100} height={100} /></td>
              <td>{x.name}</td>
              <td>{x.ph}</td>
              <td>{x.feedback}</td>
              <td><button>Feedback</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
