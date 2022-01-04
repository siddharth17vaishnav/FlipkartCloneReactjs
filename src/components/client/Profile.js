import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import "../../styles/profile.css";
import Axios from 'axios';
import { useHistory ,Link} from 'react-router-dom';
import Authentication from './Authentication';

const Profile = () => {
    const[data,setData]=useState([]);
    const email = localStorage.getItem('email');
    let history = useHistory();
    useEffect(()=>{
        Axios.post('http://localhost:3001/user/profile',{email}).then((response)=>{
            setData(response.data)
        })
    })
    return (
        <div>
            <Authentication/>
           <Navbar/>
           <div className="pic">
                   <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt='profilepic'/>
               </div>
           <div className="containers">
               
                
                <div className="information">
                    <h5>Personal information</h5>

                    {data.map((item)=>{
                        return(
                            <form className="row g-3" key={item.id}>
                            <div className="col-md-6">
                                <label  className="form-label">First Name</label>
                                <input type="text" className="form-control" value={item.firstname} disabled/>
                            </div>
                            <div className="col-md-6">
                                <label  className="form-label">Last Name</label>
                                <input type="text" className="form-control"value={item.lastname} disabled/>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control"  value={item.email} disabled/>
                            </div>
                            <div className="col-12">
                                <label  className="form-label">Mobile</label>
                                <input type="text" className="form-control" value={item.mobile} disabled/>
                            </div>
            </form>
                        )
                    })}
                   

                </div>

           </div>
           <div className="section">
              <Link to="/orders"> <span className="checkorders">Check Orders</span></Link>
           </div>
        </div>
    )
}

export default Profile
