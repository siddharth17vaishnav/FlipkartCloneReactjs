import React,{useState} from 'react'
import '../../styles/login.css';
import {Link,useHistory} from 'react-router-dom';
import Axios from 'axios';

const Register = () => {
       const [email,setEmail]=useState('');
       const [password,setPassword]=useState('');
       let history = useHistory();

       const onSubmitHandle = (e) => {
              e.preventDefault();
              sessionStorage.setItem('email',email);
              Axios.post("http://localhost:3001/user/register",{email,password}).then(res=>{
                     if(res.data === "err"){
                            alert(res.data)
                     }
                     else{
                            localStorage.setItem('email',email);
                            history.push('/AdditionalDetails');
                     }
              })
       }

    return (
              <div className="App" style={{textAlign:"center"}}>
              
                     <div  style={{marginTop:"100px"}}>
                     
                     <h1 >Register into <div className="logo"><img src='/images/logo.png' alt="logo" style={{borderRadius:"0px",width:30,marginRight:10}}/>Flipkart</div></h1>
                     </div>
              
                     
                     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                     
              <form onSubmit={onSubmitHandle}>

              <div className="input-group mb-3">
              <span className="input-group-text" > @</span>
              <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={e=>setEmail(e.target.value)}   required/>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text" > # </span>
              <input type="password" className="form-control" placeholder="Password" aria-label="password"  onChange={e=>setPassword(e.target.value)} required/>

              </div>



              <button type="submit" className="btn btn-primary">Register</button>
              <div style={{paddingTop:"10px"}}>
              <Link to="/login">Existing User? Log in</Link>
              </div>
              </form>
              </div>
   </div>
    )
}

export default Register
