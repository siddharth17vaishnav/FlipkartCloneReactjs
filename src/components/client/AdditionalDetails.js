import React,{useState} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const AdditionalDetails = () => {
    const [fName,setFName]=useState('');
    const [lName,setLName]=useState('');
    const [mobile,setmobile]=useState('');
    const email= sessionStorage.getItem('email');
    let history = useHistory();

    const onSubmitHandle=(e)=>{
        e.preventDefault();
        Axios.put('http://localhost:3001/user/additional',{firstname:fName,lastname:lName,mobile:mobile,email:email}).then((res)=>{
            if(res.data === 'err'){
                alert("Something went wrong")
            }
            else{
                history.push('/home');
            }
        })
    }
    return (
        <div className="App" style={{textAlign:"center"}}>
              
                     <div  style={{marginTop:"100px"}}>
                     
                     <h1 > <div className="logo"><img src='/images/logo.png' alt="logo" style={{borderRadius:"0px",width:30,marginRight:10}}/>Flipkart</div></h1>
                     </div>
              
                     
                     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                     
              <form onSubmit={onSubmitHandle}>

              <div className="input-group mb-3">
              <span className="input-group-text" > @</span>
              <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" onChange={e=>setFName(e.target.value)}    required/>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text" > @</span>
              <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name"  onChange={e=>setLName(e.target.value)}   required/>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text" > # </span>
              <input type="text"   className="form-control" placeholder="mobile" aria-label="mobile" onChange={e=>setmobile(e.target.value)}   required/>

              </div>



              <button type="submit" className="btn btn-primary">Save</button>
              <div style={{paddingTop:"10px"}}>
              
              </div>
              </form>
              </div>
   </div>
    )
}

export default AdditionalDetails
