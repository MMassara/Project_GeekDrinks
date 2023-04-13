import { Grid, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../axios/config';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableLoginButton, setDisableLoginButton] = useState(true);
  // LOGIN ERRORS
  const [badLogin, setBadLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  // CREATE VALIDATIONS FOR EMAIL AND PASSWORD
  useEffect(() => {
    const userLogged = !!localStorage.getItem('user');
    if (userLogged) {
      history.push('/customer/products');
    }
    const PASSWORD_LENGTH = 6;
    const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    const validPassword = (password.length >= PASSWORD_LENGTH);

    // IF BOTH ARE VALID, ABLE TO PASS - IF NOT, CONTINUE DISABLED
    if (validEmail && validPassword) {
      setDisableLoginButton(false);
    } else {
      setDisableLoginButton(true);
    }
  }, [email, password, history]);

  const buttonStyle = {
    fontWeight: '600',
    color: '#FFF',
    background: '#C94E35',
    width: '90%',
    mt: 3,
    mb: 2,
  };

  async function loginApi(body) {
    const res = await api.post('/login', body);

    return res;
  }

  // FUNCTION DEPENDS BACKEND (data)
  async function loginManager() {
    try {
      const { data } = await loginApi({ email, password });
      console.log(data);
      localStorage.setItem('user', JSON.stringify({
        // SAVE ALL USER DATA
        // userId: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      }));
      localStorage.setItem('userId', JSON.stringify(data.id));
      switch (data.role) {
      case 'customer':
        history.push('/customer/products');
        break;
      case 'seller':
        history.push('/seller/orders');
        break;
      case 'administrator':
        history.push('/admin/manage');
        break;
      default:
        history.push('/login');
      }
    } catch (error) {
      const { data } = error.response;
      setBadLogin(true);

      setErrorMessage(data.message);
    }
  }

  return (

    <Grid
      container
      padding="15px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={ { width: '40%', mt: 2, mb: 3 } }
      component={ Paper }
      elevation={ 6 }
      bgcolor="#EEB82E"
    >
      <TextField
        required
        component={ Paper }
        label="Email"
        type="email"
        name="email"
        sx={ { width: '90%', mt: 3, mb: 2 } }
        autoComplete="current-email"
        id="outlined-email-input"
        data-testid="common_login__input-email"
        // GET TARGET EMAIL FOR VALIDATION
        value={ email }
        onChange={ (event) => setEmail(event.target.value) }
      />

      <TextField
        required
        component={ Paper }
        label="Password"
        type="password"
        sx={ { width: '90%', mt: 2, mb: 3 } }
        autoComplete="current-password"
        name="password"
        id="outlined-password-input"
        placeholder="********"
        data-testid="common_login__input-password"
        // GET TARGET PASSWORD FOR VALIDATION
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
      />
      <Button
        variant="contained"
        fullWidth
        sx={ buttonStyle }
        type="button"
        data-testid="common_login__button-login"
        disabled={ disableLoginButton }
        onClick={ () => loginManager() }
      >
        Login
      </Button>
      <Button
        type="button"
        fullWidth
        variant="outlined"
        sx={ buttonStyle }
        data-testid="common_login__button-register"
        // SEND USER TO RGISTER PAGE
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </Button>
      {
        // RETURN BADLOGIN ERROR MESSAGE INCASE EMAIL IS INVALID OR ALREADY IN USE
        badLogin && (
          <span
            data-testid="common_login__element-invalid-email"
          >
            { errorMessage }
          </span>
        )
      }
    </Grid>

  );
}
