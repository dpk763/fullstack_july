import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const [user,setUser]=useState([]);
    const navigation = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
            navigation('/login');
        }

        axios.get('http://localhost:5000/api/users/auth',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err));
    },[])
    const handleLogout =()=>{
        localStorage.removeItem('token');
        navigation('/login');
    }
  return (
    <div>
      <h1>Dashboard {user.name} : {user.role}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
