import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

// import {login} from "./api/user";

function LoginPage() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  function handleCaptchaChange(value) {
    setCaptchaValue(value);
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsertypeChange = (event) => {
    setUsertype(event.target.value);
  };

  const handleGoogleLogin = () => {
    const redirectUri = `http://localhost:3001`;
    const authEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = '487637006084-qn5i9lvc40pebgfmg78km72pjoqd9cmd.apps.googleusercontent.com';
    const scope = 'https://www.googleapis.com/auth/userinfo.email';
    const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    window.location.href = url;
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (captchaValue) {
      // try {
      //   const res = await login({email, password});
      //   if (res.error) console.log(res.error)
      //   else {
      //     console.log("Successful")
      //     console.log(res.message)
  
      //     history.replace("/");
  
      //   }
      // } catch (err) {
      //     console.log(err)
      // }
    // }
    // else {
    //   console.log("Captcha Null")
    // }
  }
    

  return (
    <div className="login-page">
      <div className="left">
      <h1 style={{ fontFamily: 'Trattatello, fantasy', fontSize: '50px' }}>eVenue...</h1>
        <h2>Welcome to our website!!</h2>
        <p>One-stop-solution for event bookers and the venue owners!!</p>
        <p>Helps connect the venue owners with the customers!!</p>
        <p>We make it easy to find, book and list your venue.</p>
        <p>With smooth connections between a participant and organizer</p>
        <p>We make the entire process hassle free for you.</p>
        
        <button>Register</button>
        
      </div>
      <form onSubmit={handleSubmit} className="container">
      <h2>Login</h2>
        <div >
          <label>Email</label>
          <input type="email" value={email} onChange={handleEmailChange}  placeholder="Enter Email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" required />
        </div>
        
        <div>
            <label>User Type</label>
             <input type="text" value={usertype} onChange={handleUsertypeChange} placeholder="User/Venue Owner" required />
        </div>
        <ReCAPTCHA
          sitekey="6LcyQo8kAAAAAI99slVWg8WGEjGFE7QneFvb-wew"
          onChange={handleCaptchaChange}
        />
        <button type="submit">Login</button>
        <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
        <p><Link to='/ForgotPassword'>Forgot Password</Link> </p>
        <p>New to eVenue? <Link to = '/Register'>Sign Up</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;
