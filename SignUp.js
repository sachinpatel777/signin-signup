import React, { useState } from 'react';
import { saveUser } from './utils/localStorage';
import sideimage from './assets/image.png'
import user from './assets/user.png'
import emaill from './assets/email.png'
import lockpass from './assets/padlock.png'
import keypass from './assets/key.png'
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [signUpData,setSignUpData]=useState('');
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!agree) {
      setError('You must agree to the terms of service');
      return;
    }
    saveUser({ name, email, password });
    alert('Registration successful!');
    // Optionally reset the form
    setName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setAgree(false);
  };
*/
const handleSignUpChange = (e) =>{
  setSignUpData({...signUpData,[e.target.name]: e.target.value});
};
const handleSignUp = (e) =>{
  e.preventDefault(); 
  alert('sign up successfull! you can now sign in.')
}
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        
         <center>
      <h2>Sign Up</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form style={{width:"100%",alignItems:"center",justifyContent:"center"}} onSubmit={handleSignUp}>
        <label style={{fontSize:"70%"}}> 
            <label>
        <img style={{width:"15px",position:"absolute",right:"89%",bottom:"70%"}} src={user} alt="" className=''/>
        &nbsp;&nbsp;&nbsp;
        <input
        style={{width:"98%"}}
          type="text"
          placeholder="Your Name"
          value={signUpData.username}
          onChange={handleSignUpChange}
          required

        />
        </label>
        <br></br>
        <label>
        <img style={{width:"15px",position:"absolute",right:"89%",bottom:"64%"}} src={emaill} alt="" className=''/>
        
        &nbsp;&nbsp;&nbsp;
        <input
        
        style={{width:"98%"}}
          type="email"
          placeholder="Your Email"
          value={signUpData.email}
          onChange={handleSignUpChange}
          required
        />
        </label>
        <br></br>
        <label>
        <img style={{width:"15px",position:"absolute",right:"89%",bottom:"57%"}} src={lockpass} alt="" className=''/>
        &nbsp;&nbsp;&nbsp;

        <input
        
        style={{width:"98%"}}
          type="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleSignUpChange}
          required
        />
        </label>
        <br></br>
        <label>
        <img style={{width:"15px",position:"absolute",right:"89%",bottom:"51%"}} src={keypass} alt="" className=''/>
        &nbsp;&nbsp;&nbsp;

        <input
        
        style={{width:"98%"}}
          type="password"
          placeholder="Repeat Password"
          value={signUpData.repeatPassword}
          onChange={handleSignUpChange}
          required
        />
        </label>
         </label>
        
        <br></br>
        <label >
          <input
          style={{ margin:"6% 0 "}}
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            required
          />
          I agree to all statements in the <span style={{color:"blue"}}>Terms of Service </span>
        </label>
        <button type="submit" 
        style={{width:"100%",background:"blue",color:"white",margin:"1% 0"}}>Register</button>
   
      </form>
      </center>
      <img 
      style={{width:"50%"}}
      src={sideimage} alt="" />
    </div>
  );
};

export default SignUp;
