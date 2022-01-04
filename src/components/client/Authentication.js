import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';

const Authentication = () => {
    let history = useHistory();
    useEffect(() =>{
        if(!localStorage.getItem('email')){
            history.push('/login');
        }
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Authentication
