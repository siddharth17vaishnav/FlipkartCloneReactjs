import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import '../../styles/dashboard.product.css';
import Axios from 'axios';


const Orders = () => {
    const [data,setData]=useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/orders/getall').then((response) =>{
            console.log(response.data)
            setData(response.data);
        })
    }, []);

    const onDelete=(id)=>{
     Axios.delete(`http://localhost:3001/orders/remove/${id}`,{id:id}).then((res)=>{
      alert(res.data);
      window.location.reload();
     })
    }
    return (
        <div>
            <Navbar/>
            

            <div style={{marginLeft:300,maxWidth:"80%"}}>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Price</th>
      <th scope="col">Address</th>
      <th scope="col">Img</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>{
      return (
        <tr>
        <th scope="row">{item.id}</th>
        <td>{item.product}</td>
        <td>₹{item.price}</td>
        <td>{item.address}</td>
        <td><img src={item.imgurl} alt="productImage" style={{width:50,height:"100%"}}/></td>
        <td>{item.category}</td>
        <td><button className="btn btn-danger" onClick={()=>onDelete(item.id)}>Delete</button></td>
      </tr>
      )
    })}
   
   
  </tbody>
</table>
            </div>
        </div>
    )
}

export default Orders
