import './Login.css';


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { 
          createUserWithEmailAndPassword, 
          signInWithEmailAndPassword
       } from "firebase/auth";


const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [userCredentials, setUserCredentials]=useState({});
  const [error, setError]=useState('');

  function handleCredentials(e){
    setUserCredentials({...userCredentials,[e.target.name]: e.target.value});
    
  }

  function handleSignup(e){
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .then((userCredential) => {
    
    console.log(userCredential.user);
    
    // ...
  })
  .catch((error) => {
    
    setError(error.message);
    
    // ..
  });

  }
  function handleLogin(e){
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.error('Sign-in error:', error);
      setError(error.message);
    });
  }

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`cont ${isActive ? 'active' : ''}`}>
      <div className={`form-cont sign-up ${isActive ? 'move' : ''}`}>

        <form>
          <h1>Create Account</h1>

          
          <span>or use your email for registration</span>
          {/* <input onChange={(e)=>{handleCredentials(e)}} type="text" placeholder="Name" /> */}
          <input onChange={(e)=>{handleCredentials(e)}} type="text" name="email" placeholder="Email" />
          <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" placeholder="Password" />
          <Link to="/dashboard">
          <button onClick={(e)=>{handleSignup(e)}}>Sign Up</button>
          </Link>
          {
            error &&
            <div className='text-red-500'>
              {error}
            </div>
          }

          
        </form>
      </div>
      <div className={`form-cont sign-in ${isActive ? '' : 'move'}`}>

        <form>
          <h1>Sign In</h1>

          
          <span>or use your email and password</span>
          <input  type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="">Forgot your email or password?</a>
          <Link to="/dashboard">
          <button onClick={(e)=>{handleLogin(e)}} >Sign in</button>
          </Link>

          {
            error &&
            <div className='text-red-500'>
              {error}
            </div>
          }

        </form>
      </div>
      <div className={`toggle-cont ${isActive ? 'move' : ''}`}>
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button id="login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, User!</h1>
            <p>Register with your personal details to use all site features</p>
            <button id="register" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Login;
