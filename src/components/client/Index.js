import React from 'react';
import Login from './Login';
import Home from './Home'

const Index = () => {
    return (
      <>
        {!localStorage.getItem("email") ? <Login/> : <Home/>}
        </>
    )
}

export default Index
