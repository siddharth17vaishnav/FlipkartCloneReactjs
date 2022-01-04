import React,{useState,useEffect} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import '../../styles/viewdetail.css';
import Axios from 'axios';
import Authentication from './Authentication';

const ViewDetails = () => {
    const {id}=useParams();
    const history = useHistory();
    const[data,setData] = useState([]);
    useEffect(()=>{
        Axios.post(`http://localhost:3001/dashboard/getproductbyid/${id}`,{id:id}).then((response)=>{
            setData(response.data);
        });
    })

    const onClickBuy=(id)=>{
        history.push(`/address/${id}`)
    }

    
   
    return (
       
            
            <div className="containers" style={{maxWidth:"90%"}}>
                <Authentication/>
                {data.map((item)=>{
                    return (
                        <div className="left">
                        <img src={item.imgurl} alt="logo" style={{width:"70%",marginRight:10}}/>
                        <div>
                        <button className="btn btn-primary" onClick={()=>onClickBuy(item.id)}>Buy Now</button>
                        </div>
                    </div>
                    )
                })}
              
               
                    {data.map((item)=>{
                        return(
                            <div className="right">
                             <h3>{item.name}</h3>
                    <p>4.166,982 Ratings & 5,947 Reviews</p>
                    <p>₹{item.price}</p>
                    <div style={{display:"flex"}}>
                        <div className="highlight">highlight</div>
                        <div className="highright">{item.highlight}</div>
                    </div>
                           </div>
                        )
                    })}
                   
               
            </div>
     
    )
}

export default ViewDetails
