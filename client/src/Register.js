import { useState } from 'react';
import './Register.css';
import {register} from "./api/user";


function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerError,setRegisterError] = useState(null);
  const [phone, setPhoneNumber] = useState('');
  
  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password != confirmPassword) {
    //   setRegisterError('Password and Confirm Password do not match');
    // }
    // else {
      try {
        const res = await register(email,phone,firstname,lastname,password);
        if(res.error) alert(res.error);
        else{
          alert(res.message);
        }
  
      } catch (err) {
        alert(err)
      }
    // }
    
  };

  return (
    <div className='register'>
      
      <form onSubmit={handleSubmit} >
      <h2>Register</h2>
        <label>
          First Name
          <input type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)} placeholder="First Name" required />
        </label>
        <br />
        <label>
          Last Name
          <input type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} placeholder="Last Name" required />
        </label>
        <br />
        <label>
          Email
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter Email" required />
        </label>
        <br />
        <label>
          Password
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
        </label>
        <br />
        <label>
          Confirm Password
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Re-enter Password"  required />
        </label>
        <br />
        <label>
          Phone Number
          <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Phone" required />
        </label>
        <br />
        <button type="submit">Register</button>
        {/* {registerError && <p>{registerError}</p>} */}
      </form>
    </div>
  );
}

export default Register;
