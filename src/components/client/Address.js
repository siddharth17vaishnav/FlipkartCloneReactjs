import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Authentication from './Authentication';
import '../../styles/address.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
const Address = () => {
    let {id} = useParams();
    let history = useHistory();
    const email=localStorage.getItem('email');
    const[firstname,setfirstname]=useState('');
    const[lastname,setlastname]=useState('');
    const[addname,setaddname]=useState('');
    const[statename,setstatename]=useState('');
    const[cityname,setcityname]=useState('');
    const[zipname,setzipname]=useState('');
    const[payment,setpayment]=useState('');
    const[product,setProduct]=useState('');
    const[price,setPrice]=useState('');
    const[imgurl,setimgurl]=useState('');
    const[category,setcategory]=useState('');

    useEffect(() => {
        Axios.post(`http://localhost:3001/dashboard/getproductbyid/${id}`,{id:id}).then((response)=>{
            setProduct(response.data[0].name);
            setPrice(response.data[0].price);
            setimgurl(response.data[0].imgurl);
            setcategory(response.data[0].category);
        });
    })

    const onHandleSubmit=(e)=>{
        e.preventDefault();
       Axios.post('http://localhost:3001/orders/add',{firstname,lastname,email,addname,statename,cityname,zipname,payment,product,price,imgurl,category}).then(response=>{
           
               history.push('/success');
           
       })
    }

    return (
        <div>
          <Authentication/>
           <Navbar />
           <div className="address">
            <h2>Address</h2>
            <div classname="information">
            <form class="row g-3" onSubmit={onHandleSubmit}>
  <div class="col-md-6">
    <label  class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputEmail4" onChange={(e)=>setfirstname(e.target.value)} placeholder="FirstName"/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Last Name</label>
    <input type="text" class="form-control"  onChange={(e)=>setlastname(e.target.value)} placeholder="Last Name"/>
  </div>
  <div class="col-12">
    <label  class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"  onChange={(e)=>setaddname(e.target.value)}/>
  </div>
  
  <div class="col-md-6">
    <label  class="form-label">State</label>
    <input type="text" class="form-control" id="inputCity" placeholder="state" onChange={(e)=>setstatename(e.target.value)}/>
  </div>
  
  <div class="col-md-6">
    <label  class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" placeholder="city"   onChange={(e)=>setcityname(e.target.value)}/>
  </div>
  
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"  onChange={(e)=>setzipname(e.target.value)} placeholder="Zip"/>
  </div>

  <div class="col-md-4">
    <label for="inputState" class="form-label">Payment</label>
    <select id="inputState" class="form-select" onChange={(e)=>setpayment(e.target.value)} >
    <option selected>Select a Payment Method</option>
      <option value="cod">Cash on Delivery</option>
      <option calue="upi">Upi</option>
      
    </select>
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary" >Next</button>
  </div>
</form>
            </div>
           </div>
        </div>
    )
}

export default Address
