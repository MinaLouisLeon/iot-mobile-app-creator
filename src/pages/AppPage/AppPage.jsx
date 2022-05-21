import React from 'react'
import Home from '../Home/Home';
import LoginPage  from '../LoginPage/LoginPage';
import { useState } from 'react';
const AppPage = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      {isSignedIn ? <Home/> : <LoginPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>}
    </>
  )
}

export default AppPage