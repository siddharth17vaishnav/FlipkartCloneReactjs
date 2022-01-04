import React from 'react';
import '../../styles/navbar.css';
import {Link} from 'react-router-dom'

const Navbar = ({name}) => {
 
 

    const logout=()=>{
        localStorage.removeItem('email');
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
             <div className="container-fluid">
                <div className="left" >
                 
                 <Link to="/home" > <img src="/images/fplus.png" alt="logo" /></Link>
                  
                   <input type="search" placeholder="Search for products, brands and more"/>
                   <span className="search">
                   <img src="/images/search.png" alt="search" style={{marginLeft:3,width:20}}/>
                    </span>
                </div>

                <div className="right">
          
<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    {name}
  </button>
  <ul className="dropdown-menu">
    <li><span className="dropdown-item"><Link to="/profile">My Profile</Link></span></li>
    <li><span className="dropdown-item"><Link to="/home">SuperCoin Zone</Link></span></li>
    <li><span className="dropdown-item" ><Link to="/home">Flipkart Plus Zone</Link></span></li>
    <li><span className="dropdown-item"><Link to="/orders">Orders</Link></span></li>
    <li><span className="dropdown-item"><Link to="/home">Wishlist</Link></span></li>
    <li><span className="dropdown-item"><Link to="/home">My Chats</Link></span></li>
    <li><span className="dropdown-item" ><Link to="/home">Coupons</Link></span></li>
    <li><span className="dropdown-item" ><Link to="/home">Gift Cards</Link></span></li>
    <li><span className="dropdown-item" ><Link to="/home">Notification</Link></span></li>
    <li><span className="dropdown-item" onClick={logout}>Logout</span></li>
  </ul>
</div>

<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    More
  </button>
  <ul className="dropdown-menu">
    <li><span className="dropdown-item" href="#">Notifications Preferences</span></li>
    <li><span className="dropdown-item" href="#">Sell on Flipkart</span></li>
    <li><span className="dropdown-item" href="#">24x7 Customer Care</span></li>
    <li><span className="dropdown-item" href="#">Advertise</span></li>
    <li><span className="dropdown-item" href="#">Download App</span></li>
    
  </ul>
</div>

<div className="btn-group" style={{marginRight:100}}>
   <img src="images/cart.png" alt="Cart" style={{width:20,cursor:"pointer"}}/>
</div>
                </div>

    
            </div>
        </nav>
    )
}

export default Navbar
