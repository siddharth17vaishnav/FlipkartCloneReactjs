import React,{useEffect} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom'

const Navbar = () => {
    let history = useHistory();
    const logout=()=>{
        localStorage.removeItem('email');
    }
    const email = localStorage.getItem('email');

    useEffect(()=>{
        Axios.post('http://localhost:3001/dashboard/auth',{email:email}).then((res)=>{
            console.log(res.data);
            if(res.data[0].role === 'admin'){

            }
            else{
                history.push('/error');
            }
        });
        if(!localStorage.getItem('email')){ 
            history.push('/')
        }
    },[]);
    return (
       
            <div className="wrapper d-flex">
    <div className="sidebar">
        <p className="myproject px-3">Dashboard</p>
        <ul>
            <li><a href="/dashboard/products">Products</a></li>

            <li><a href="/dashboard/users">Users</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
           
        </ul>
        <div className="userProfile">
            <p className="username">Siddharth <br/><span onClick={logout} style={{cursor:"pointer"}}>Logout</span></p>
        </div>
    </div>
</div>
        
    )
}

export default Navbar
