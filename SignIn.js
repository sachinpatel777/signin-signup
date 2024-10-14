import React, { useState } from 'react';
import { findUser } from './utils/localStorage';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [signInData,setSignInData]=useState('');
  const [signUpData,setSignUpData]=useState('');
  const [message,setessage] = useState('');
  /*
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const user = findUser(email);
    if (user && user.password !== password) {
      alert(' Invalid credentials');
      // Handle remember me functionality if needed
    } else {
      alert ('Sign In successful!');
    }
  };
*/
const handleSignInChange = (e) =>{
  setSignInData({...signInData,[e.target.name]:e.target.value});
};
const handleSignIn = (e) => {
  e.preventDefault(); 
  if (signInData.username === signUpData.username && signInData.password === signUpData.password) {
    alert(' sign-in succesfull');
    // Handle remember me functionality if needed
  } else {
    alert ('data not match');
  }
}
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate sending a reset password link
      alert(`A password reset link has been sent to ${email}`);
      setForgotPassword(false);
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignIn} style={{ padding: " 0 30px", border: "10px solid blue",borderRadius:"0 0 0 0",display:"block",margin:"1% 25%",justifyContent:"center",alignItems:"center" }}>
        <center>
          <h2>Sign In</h2>
        </center>
        <label>Email address</label><br></br>
        <input
        style={{width:"100%"}}
          type="email"
          placeholder="Email Address"
          value={signInData.username}
          onChange={handleSignInChange}
          required
        /><br></br>
        <label>Password</label><br></br>
        <input 
        
        style={{width:"100%"}}
          type="password"
          placeholder="Enter Password"
          value={signInData.password}
          onChange={handleSignInChange}
          required
        /><br></br>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember Me
        </label><br></br>
        <button type="submit" style={{ color: "white", background: "blue", width: "101%" }}>Submit</button>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" onClick={() => setForgotPassword(true)} style={{ fontSize: "75%" }}>
            Forgot <span style={{color:"blue"}}>Password?</span>
          </a>
          <br></br>
          
     
       
        </p>
        
      </form>

      {forgotPassword && (
        <div>
          <h3>Reset Password</h3>
          <p>Please enter your email to receive a reset link.</p>
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <button type="submit">Send Reset Link</button>
            <button onClick={() => setForgotPassword(false)}>Cancel</button>
           
            
         </form>

          {message && <p>{message}</p>}

        </div>
      )}
    </div>
  );
};

export default SignIn;
