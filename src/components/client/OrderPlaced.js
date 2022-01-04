import React from 'react'
import Navbar from './Navbar';
import gif from '../../assets/orderplaced.gif';
import '../../styles/orderplaced.css';
import { useHistory } from 'react-router-dom';
import Authentication from './Authentication';

const OrderPlaced = () => {
    let history = useHistory();
    return (
        <div>
            <Authentication/>
            <Navbar/>
            <div className="orderplaced">
                <img src={gif} alt="loading"/>
            </div>
            <h3>Order Placed Successfully</h3>
            <div className="btn">
            <button className="btn btn-primary" onClick={()=>history.push('/orders')}>Check Orders Here</button>
            </div>
        </div>
    )
}

export default OrderPlaced
