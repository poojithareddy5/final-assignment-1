import React, { useContext, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../components/ContextApi'

const Login = () => {
    const value = useContext(ContextApi)
    console.log(value)
    const Navigate = useNavigate()
    const [showError, setShowError] = useState(false)
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    console.log(inputValue)
    const handleButton = (e) => {
        e.preventDefault();
        if (inputValue.email === value.email && inputValue.password === value.password) {
            localStorage.setItem('auth', JSON.stringify(true))
            setShowError(false)
            Navigate('/')
            window.location.reload();
        }
        setShowError(true)
    }
    
    const changEvent = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }

    return (
        <form onSubmit={handleButton}>
            <div>
                <h2>Login</h2>
                <div>
                    <input onChange={changEvent}  name='email' type='email' placeholder='Email' />
                    <input onChange={changEvent} name='password' type='password' placeholder='Password' />
                </div>
                <p hidden={!showError} >Invalid email and password!</p>
                <Link to='/forgot' >Forgot password</Link>
                <button type='submit' >Login</button>
            </div>

        </form>
    )
}

export default Login