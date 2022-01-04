import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import Axios from 'axios';
import '../../styles/dashboard.css';

const Users = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/dashboard/getUser').then(response =>{
            setData(response.data);
        })
    },[]);

    const handleDelete=(id)=>{
        Axios.delete(`http://localhost:3001/dashboard/user/remove/${id}`,{id:id}).then((res)=>{
            alert(res.data);
            window.location.reload();
           })
    }
    
    

    return (
        <div>
            <Navbar/>
            <div className="Container">
                <table className="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Type</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <>
                           
                            <tr key={item.id}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.type}</td>
                    <td>
                        {item.role}
                        
                        
                    </td>
                    <td><button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>delete</button></td>
                    </tr>
                         
                            </>
                        )
                    })}
                    
                    </tbody>
               
                </table>
            </div>
        </div>
    )
}

export default Users
