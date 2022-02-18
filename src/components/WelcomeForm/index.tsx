import { useState, ChangeEvent } from 'react';
import "./WelcomeForm.scss"

import { useDarkMode } from "../../contexts/DarkModeContext"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function WelcomeForm() {
  const { colorMode } = useDarkMode()

  // Normal state declaration.
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fullNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  };

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      fullName,
      email,
      password
    };

    localStorage.setItem('landing_page.user', JSON.stringify(user));
  };

  return (
    <div className='box'>
      <div className={`register __${colorMode}`}>
        <form onSubmit={submitHandler}>
          <div className='form'>
            <div className='field'>
              <TextField fullWidth label="Full Name" variant="outlined" onChange={fullNameChangeHandler} value={fullName} required />
            </div>
            <div className='field'>
              <TextField fullWidth label="Email" variant="outlined" onChange={emailChangeHandler} value={email} type="email" required />
            </div>
            <div className='field'>
              <TextField fullWidth label="Password" variant="outlined" onChange={passwordChangeHandler} value={password} type="password" required />
            </div>
            <div className='field'>
              <Button variant="contained" fullWidth type="submit">Create an account</Button>
            </div>
            <div className='divider'>
              <Divider />
            </div>
            <div className='info'>
              <p className={`info-register __${colorMode}`}>
                By creating you account you agree to our <span className="link">Privacy Policy</span>, <span className="link">Data Policy</span> and <span className="link">Cookie Policy</span>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WelcomeForm