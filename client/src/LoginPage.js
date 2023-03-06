import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import Home from './Home';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

 import {login, verified} from "./api/user";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('1');
  const [captchaValue, setCaptchaValue] = useState(null);

  const radios = [
    { name: 'User', value: '1' },
    { name: 'Venue Owner', value: '2' },
  ];

  function handleCaptchaChange(value) {
    setCaptchaValue(value);
    console.log(captchaValue)
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
    const redirectUri = `http://localhost:3000`;
    const authEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = '487637006084-qn5i9lvc40pebgfmg78km72pjoqd9cmd.apps.googleusercontent.com';
    const scope = 'https://www.googleapis.com/auth/userinfo.email';
    const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    window.location.href = url;
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (captchaValue != null) {
      try{
        const res = await login(email,password);
        if(res.error) alert(res.error);
        else{
          alert(res.message);
          if (await verified (email,password) == true) {
            console.log("TRUE")
          }
          else {
            console.log("False")
          }
          navigate("/", { replace: true });
          <Route path="/" element={<Home loggedin={true} />} />
        }
  
      } catch (err) {
        alert(err);
      }
    } 
    
  }
    
  return (
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
            <Nav.Link style={{color: 'black'}} href="#first">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{color: 'black'}} href="/Register">SignUp</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
      </Form.Group>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? '#ffbd59' : '#ffbd59'}
            name="radio"
            value={radio.value}
            checked={usertype === radio.value}
            onChange={handleUsertypeChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <ReCAPTCHA onChange={handleCaptchaChange} sitekey="6LcyQo8kAAAAAI99slVWg8WGEjGFE7QneFvb-wew"></ReCAPTCHA>
      <Button style={{backgroundColor: '#ffbd59', color: 'black'}} type='submit'>Login</Button>
      <Button variant='outline-primary' onClick={handleGoogleLogin}>Login with Google</Button>
      <Row>
        <Col>
        <p style={{fontSize: '18px'}}><Link to='/ForgotPassword'>Forgot Password</Link> </p>

        </Col>
          <Col>
          <p style={{fontSize: '18px'}}><Link to='/'> Home </Link></p>
          </Col>
      </Row>

    </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default LoginPage;



//   return (
//     <div className="login-page">
//       <div className="left">
//       <h1 style={{ fontFamily: 'Trattatello, fantasy', fontSize: '50px' }}>eVenue...</h1>
//         <h2>Welcome to our website!!</h2>
//         <p>One-stop-solution for event bookers and the venue owners!!</p>
//         <p>Helps connect the venue owners with the customers!!</p>
//         <p>We make it easy to find, book and list your venue.</p>
//         <p>With smooth connections between a participant and organizer</p>
//         <p>We make the entire process hassle free for you.</p>
        
//         <button>Register</button>
        
//       </div>
//       <form onSubmit={handleSubmit} className="container">
//       <h2>Login</h2>
//         <div >
//           <label>Email</label>
//           <input type="email" value={email} onChange={handleEmailChange}  placeholder="Enter Email" required />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" required />
//         </div>
        
//         <div>
//             <label>User Type</label>
//              <input type="text" value={usertype} onChange={handleUsertypeChange} placeholder="User/Venue Owner" required />
//         </div>
//         <ReCAPTCHA
//           sitekey="6LcyQo8kAAAAAI99slVWg8WGEjGFE7QneFvb-wew"
//           onChange={handleCaptchaChange}
//         />
//         <button type="submit" disabled={!email || !password} onClick={handleSubmit}>Login</button>
//         <div>
//         <button onClick={handleGoogleLogin}>Login with Google</button>
//         </div>
//         <p><Link to='/ForgotPassword'>Forgot Password</Link> </p>
//         <p>New to eVenue? <Link to = '/Register'>Sign Up</Link></p>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;