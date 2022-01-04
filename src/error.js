import React from 'react';
import gif from './assets/error.gif';


const error = () => {
    return (
        <div clasName="error" style={{display:"flex",justifyContent: "center"}}>
            
            <img src={gif} alt="404 not found" style={{width:640}}/>
            
        </div>
    )
}

export default error
