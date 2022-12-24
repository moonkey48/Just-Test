import React, { useEffect, useState } from 'react';

const TitleComp = () => {
    const [state,setState] = useState()
    useEffect(()=>{
        console.log('[Title Component] did mount')
        return () => {
            console.log('[Title Component] will unmount')
        }
    },[])
    useEffect(()=>{
        console.log('[Title Component] state did mount')
        return () => {
            console.log('[Title Component] state will unmount')
        }
    },[state])
    return (<>
    <h1>this is title which will unmount</h1>
    </>)
}

export default TitleComp;