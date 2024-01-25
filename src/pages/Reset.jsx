import React, { useContext, useState } from 'react'
import { ContextApi } from '../components/ContextApi';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const Reset = () => {
  const navigate = useNavigate()
  const value = useContext(ContextApi)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('')
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleResetPassword = () => {
    // Reset the password (insecure demonstration)
    if (newPassword === confirmPassword && newPassword !== "" && confirmPassword !== "" && newPassword.length >= 6 && confirmPassword.length >= 6) {
      value.password = newPassword;
      setMessage('Password reset successfully.');
      navigate('/login');
    } else {
      if (newPassword === "" && confirmPassword === "") {
        setMessage('Please enter password.');
      } else if (newPassword.length <= 6 && confirmPassword.length <= 6) {
        setMessage('Please enter more than 6 characters.');
      } else {
        setMessage('Passwords do not match.');
      }
    }
  };
  const backToLogin = () =>{
    navigate(-1)
  }
  return (
    <form>
      <div>
      <div className='login-header' >
            <FaArrowLeft onClick={backToLogin} />
            <h2>Reset Password</h2>
          </div>
      <div>
        <label className='otp'>
          New Password:
          <input type="password" placeholder='password' value={newPassword} onChange={handleNewPasswordChange} />
        </label>

        <label className='otp'>
          Confirm Password:
          <input type="password" placeholder='password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
      </div>
        
        <p>{message}</p>

        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </form>
  )
}

export default Reset