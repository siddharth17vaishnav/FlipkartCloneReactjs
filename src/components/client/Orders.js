import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import '../../styles/orders.css';
import Authentication from './Authentication';

const Orders = () => {
    const [orders,setOrders]=useState([]);
    const email = localStorage.getItem('email');
    
    useEffect(()=>{
        Axios.post('http://localhost:3001/orders/getall',{email}).then((response)=>{
            setOrders(response.data);
            
        })
    },[]);
    return (
        <div>
            <Authentication/>
            <Navbar/>
        <div className="order">
            {orders.map((item)=>{
                return(
                    <div className="contain">
                    <div className="productimg">
                        <img src={item.imgurl} style={{width:100}}/>
                    </div>
                    <div className="productdetails">
                        <p>{item.product}</p>
                        <p>₹{item.price}</p>
                        <small>{item.address}</small>
                        <br/>
                        <small>Payment Mode:{item.payment}</small>
                    </div>
                  </div>
                )
            })}
       
        </div>
        </div>
    )
}

export default Orders
