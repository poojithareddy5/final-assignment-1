import React, { useContext, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { ContextApi } from '../components/ContextApi';
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {
  const navigate = useNavigate();
  const value = useContext(ContextApi)
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [saveOtp, setSaveOtp] = useState('')
  const [show, setShow] = useState(false)
  const [showOtpError, setShowOtpError] = useState('')

  const [message, setMessage] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setSaveOtp(e.target.value);
  };

  const handleSendOtp = () => {
    let pattern = "(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"

    if (email.match(pattern)) {
      // Generate a random OTP
      const generatedOtp = Math.floor(1000 + Math.random() * 9000);
      setOtp(generatedOtp);
      setMessage('');
      setShow(true)
    } else {
      if (email !== '') {
        setMessage('Oops! email does not exist.');
      } else {
        setMessage('email required*');
      }
    }

  };

  const handleOtpVerify = () => {
    navigate('/login')
  }
  const backBtn = () => {
    setShow(false)
  }
  const backToLogin = () => {
    navigate('/login')
  }
  return (
    <div>
      <form>
        <div hidden={show} >
          <div className='login-header' >
            <FaArrowLeft onClick={backToLogin} />
            <h2>Email</h2>
          </div>
          <div>
            <input autocapitalize="off" spellcheck="true"   autoFocus type="email" required placeholder='Email' value={email} onChange={handleEmailChange} />

          </div>
          <p>{message}</p>
          <button type="button" onClick={handleSendOtp}>
            Send OTP
          </button>
        </div>
        <div hidden={!show} >
          <div className='login-header' >
            <FaArrowLeft onClick={backBtn} />
            <h2>OTP</h2>
          </div>
          <div style={{textAlign:'center'}}>
          <span  className='otp' >OTP Sent to email ✅</span>
          </div>
          <button type='button' onClick={handleOtpVerify} >Done</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
