import React,{useState,useEffect} from 'react'
import Login from './Login';
import Navbar from './Navbar';
import Axios from 'axios';
import ImgSlider from './ImgSlider';
import Category from './Category';
import DealofTheDay from './DealofTheDay';
import Footer from './Footer';
import TopMobiles from './TopMobiles';

const Home = () => {
    const [name,setName]=useState('');
    const email = localStorage.getItem('email');

    useEffect(() => {
        Axios.post('http://localhost:3001/user/profile',{email}).then((response) => {
            setName(response.data[0].firstname);
           
        });
    },[]);
    return (
        <div>
            {!localStorage.getItem("email") ? <Login/> :
            <div>
                <Navbar name= {name}/>
                <Category/>
                <ImgSlider />
                <DealofTheDay/>
                <TopMobiles/>
                <Footer/>
            </div>
            }
        </div>
    )
}

export default Home
