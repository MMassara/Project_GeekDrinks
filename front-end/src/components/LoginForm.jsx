import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    const PASSWORD_LENGTH = 6;
    const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    const validPassword = (password.length >= PASSWORD_LENGTH);

    // IF BOTH ARE VALID, ABLE TO PASS - IF NOT, CONTINUE DISABLED
    if (validEmail && validPassword) {
      setDisableLoginButton(false);
    } else {
      setDisableLoginButton(true);
    }
  }, [email, password]);

  // const loginApi = async () => {
  //   const { data } = await api.post(
  //     'http://localhost:3001/login',
  //     { email,
  //       password,
  //       // id,
  //       // role,
  //       // token,
  //     },
  //   );
  //   console.log(data);
  // };

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
    <div>
      <form>
        <label htmlFor="email">
          Usuário
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            data-testid="common_login__input-email"
            // GET TARGET EMAIL FOR VALIDATION
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            data-testid="common_login__input-password"
            // GET TARGET PASSWORD FOR VALIDATION
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ disableLoginButton }
          onClick={ loginManager }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          // SEND USER TO RGISTER PAGE
          onClick={ () => history.push('/register') }
        >
          <Link to="/register">Cadastro</Link>
        </button>
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
      </form>
    </div>
  );
}
