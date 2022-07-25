import React from 'react'
import { useState } from 'react'
import { login } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';


export const Login = () => {
    const [temp,setTemp] = useState(false)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state) => state.loginReducer.token);
    console.log(token);
    

    return (
        <div>
            <h3>Login</h3>
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={() => dispatch(login({ email, pass }))}>Login</button>


        </div>
    )
}

