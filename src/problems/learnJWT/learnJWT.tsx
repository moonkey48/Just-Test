import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

axios.defaults.withCredentials = true
//withCredentials를 true로 해야 refreshToken을 받을 수 있다.

const LearnJWT = () => {
    const [loginSuccess, setLoginSuccess] = useState<boolean>(false)
    const [cookie, setCookie] = useCookies()
    
    
    const onLogin = (id:string, pw:string) => {
        const data = {
            id:id,
            pw:pw
        }
        axios.post('http://localhost:8080/login', data).then(response => {
            console.log(response)
            const {accessToken, refreshToken} = response.data
            axios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`
            setCookie('refreshToken', refreshToken, {
                expires: new Date(Date.now()+30000)
            })
            setLoginSuccess(true)
        }).catch(e=>{
            console.log(e)
        })
    }
    const handleLogin = () => {
        onLogin('hello', 'world')
    }
    const handleRefresh = () => {
        axios.post('http://localhost:8080/refresh', {
            refreshToken: cookie.refreshToken
        }).then(response => {
            console.log(response)
            const {accessToken} = response.data
            axios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`
        }).catch(e=>{
            console.log(e)
        })
    }
    const handleGetUser = () => {
        axios.get('http://localhost:8080/user').then(response => {
            console.log(response)
        }).catch(e=>{
            console.log(e)
        })
    }


    return (<>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleRefresh}>refresh</button>
        <button onClick={handleGetUser}>get user</button>
        { loginSuccess && <h1>login success</h1> }
    </>)
}

export default LearnJWT;