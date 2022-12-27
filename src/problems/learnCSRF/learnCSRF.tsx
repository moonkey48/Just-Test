import axios from 'axios';
import React, { useEffect } from 'react';

const LearnCSRF = () => {
    const getCSRFToken = async () => {
        const response = await axios.get('http://localhost:8000/getCSRFToken').catch(e=>console.log(e))
        console.log(response)
        // axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken
    }
    const getUsers=async()=>{
        const response=await fetch('https://randomuser.me/api/');
        const data=await response.json();
        console.log(data.results[0])
    }
    useEffect(()=>{
        //getUsers()
        getCSRFToken()
    },[])
    return <h1>Learn setting CSRF Token</h1>
}

export default LearnCSRF;