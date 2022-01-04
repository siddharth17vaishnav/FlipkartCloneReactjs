import React,{useState} from 'react';
import '../../styles/login.css';
import {Link,useHistory} from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  let history=useHistory();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/user/login',{email:email,password:password}).then(res=>{
      if(res.data === "error"){
        alert("Email or Password is Incorrect");
      }
      else{
        localStorage.setItem('email',email);
        history.push('/home');
      }
    });
  }
    return (
      <div className="App" style={{textAlign:"center"}}>
    
       <div  style={{marginTop:"100px"}}>
     
<h1 >Login into <div className="logo"><img src="/images/logo.png" alt="logo" style={{borderRadius:"0px",width:30,marginRight:10}}/>Flipkart</div></h1>
</div>
  
       
       <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>     
           <form onSubmit={onSubmitHandle}>
           <div className="input-group mb-3">
         <span className="input-group-text" >  @ </span>
         <input type="text" className="form-control" placeholder="Username" aria-label="Username"  onChange={e=>setEmail(e.target.value)} required/>
         
       </div>

         <div className="input-group mb-3">
           <span className="input-group-text" > <img src="https://img.icons8.com/material-rounded/24/000000/lock--v1.png" alt="lock" style={{width:18}}/></span>
           <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={e=>setPassword(e.target.value)}  required/>
         </div>
         <button type="submit" className="btn btn-primary">Login</button>

         <div style={{paddingTop:"10px"}}>
          <Link to="/register"><p>New User Register here</p></Link>
             </div>
             </form>
         </div>
   </div>
    
    )
}

export default Login
