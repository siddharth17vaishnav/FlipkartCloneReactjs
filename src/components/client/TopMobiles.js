import React,{useState,useEffect} from 'react';
import '../../styles/Dealofthedaya.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Axios from 'axios'
import {useHistory} from 'react-router-dom';
 

const TopMobiles = () => {
    let history = useHistory();
  
        let setting={
            dots:false,
            infinit:true,
            speed:300,
            slidesToShow:4,
            slidesToScroll:1,
            autoplay:true
        };
        const[data,setData]=useState([]);
        useEffect(()=>{
            Axios.get('http://localhost:3001/dashboard/topmobiles').then((response)=>{
                setData(response.data);
            })
        });

        const  detail=(id)=>{
           
            history.push(`/viewDetails/${id}`);
         
         }
        return (
            <div style={{marginTop:30}}>
                <h2 className="header">🔔TopMobiles</h2>
            <Slider {...setting}>
              
             
                  {data.map((item)=>{
                      return(
                          <div className="img" key={item.id} onClick={()=>detail(item.id)}>
                              <img src={item.imgurl} alt="logo"/>
                              <p>₹{item.price}</p>
                          </div>
                      )
                  })}
             
              
    
            </Slider>
          </div>
        )
    }

export default TopMobiles

