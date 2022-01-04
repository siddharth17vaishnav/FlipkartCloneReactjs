import React,{useState} from 'react';
import Navbar from './Navbar';
import '../../styles/dashboard.product.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

const CreateProduct = () => {
    const[name,setName] =useState('');
    const[price,setPrice] =useState(0);
    const[highlight,setHighlight] = useState('');
    const[imgurl,setImgUrl] = useState('');
    const[category,setCategory] =useState('');
    let history = useHistory();


    const onSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/dashboard/product/create',{name,price,highlight,imgurl,category}).then((res)=>{
            if(res.data === "added"){
                alert("added");
                history.push('/dashboard/products');
            }
            else{
              alert("something went wrong")
            }
           
        })
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1>Add Product</h1>
                <div style={{maxWidth:"80%"}}>
                <form onSubmit={onSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
  </div>


  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Price</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setPrice(e.target.value)}/>
  </div>


  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Highlights</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={(e)=>setHighlight(e.target.value)}></textarea>
</div>


  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">ImgUrl</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setImgUrl(e.target.value)}/>
  </div>

  <div className="mb-3">
  <label for="dog-names">Categories</label>
<select name="dog-names" id="dog-names" onChange={(e)=>setCategory(e.target.value)}>
<option value="default" default>select</option>
    <option value="mobile">Mobiles</option>
    <option value="tv">Tv</option>
    <option value="furniture">Furniture</option>
    <option value="ac">Ac</option>
    <option value="others">others</option>
  
</select>

  </div>


  
  <button type="submit" className="btn btn-primary">Add</button>
</form>
                </div>
                
            </div>
        </div>
    )
}

export default CreateProduct
