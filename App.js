import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      
      {isSignUp ? (
        <SignIn />
      ) : (
        <SignUp />
        
      )}<br></br>
      <button style={{width:"50%",margin:"0 25%"}}onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Create an account' : 'Already have an account? Sign In'}
      </button>
    </div>
  );
};

export default App;
