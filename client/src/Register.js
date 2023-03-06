import { useState } from 'react';
import './Register.css';
import {register} from "./api/user";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Register() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  //const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //const [registerError,setRegisterError] = useState(null);
  const [phone, setPhoneNumber] = useState('');
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await register(email,phone,firstname,lastname,password);
      if(res.error) alert(res.error);
      else{
        alert(res.message);

        navigate("/",{ replace: true });
      }

    } catch (err) {
      alert(err)
    }
    
  };
return (
  <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
            <Nav.Link style={{color: 'black'}} href="/Login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{color: 'black'}} href="/Register">SignUp</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Text>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="Enter first name" value={firstname} onChange={(event) => setFirstname(event.target.value)} required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="Enter last name" value={lastname} onChange={(event) => setLastname(event.target.value)} required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" value={phone} onChange={(event) => setPhoneNumber(event.target.value)} required />
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
            onChange={(event) => setUsertype(event.target.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <ReCAPTCHA onChange={handleCaptchaChange} sitekey="6LcyQo8kAAAAAI99slVWg8WGEjGFE7QneFvb-wew"></ReCAPTCHA>
      <Button style={{backgroundColor: '#ffbd59', color: 'black'}} type='submit'>Register</Button>
      <p><Link to='/'>Home</Link> </p>

    </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default Register;

//   return (
//     <div className='register'>
      
//       <form onSubmit={handleSubmit} >
//       <h2>Register</h2>
//         <label>
//           First Name
//           <input type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)}   />
//         </label>
//         <br />
//         <label>
//           Last Name
//           <input type="text" value={lastname} onChange={(event) => setLastname(event.target.value)}  />
//         </label>
//         <br />
//         <label>
//           Email
//           <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}  />
//         </label>
//         <br />
//         <label>
//           Password
//           <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}   />
//         </label>
//         <br />
//         <label>
//           Confirm Password
//           <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}   />
//         </label>
//         <br />
//         <label>
//           Phone Number
//           <input type="tel" value={phone} onChange={(event) => setPhoneNumber(event.target.value)}   />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;