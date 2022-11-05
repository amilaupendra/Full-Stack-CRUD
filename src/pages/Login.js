import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
    const navigate = useNavigate();

    const[user,setUser]=useState({
        username:"",
        password:""
    })

    const{username,password}=user

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})

    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/login",user).then(()=>{
            navigate("/dashboard");
        }).catch(()=>{
            alert("Password or username not match!");
        })
    }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>  User Login</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                

                <div className="mb-3">
                    <label htmlFor="Username" className='form-label'>Username</label>
                    <input 
                    type={"text"} 
                    className="form-control"
                    placeholder='Enter your Username'
                    name='username'
                    value={username}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className='form-label'>Password</label>
                    <input 
                    type={"password"} 
                    className="form-control"
                    placeholder='Enter your Password'
                    name='password'
                    value={password}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <button type='submit' className='btn btn-outline-primary'>Login</button>
                </form>

            </div>
        </div>
    </div>
  )
}
