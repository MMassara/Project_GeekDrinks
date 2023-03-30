import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableLoginButton, setDisableLoginButton] = useState(true);
  // LOGIN ERRORS
  // const [badLogin, setBadLogin] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  // const navigate = useNavigate();

  // CREATE VALIDATIONS FOR EMAIL AND PASSWORD
  useEffect(() => {
    const PASSWORD_LENGTH = 6;
    const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);
    const validPassword = (password.length >= PASSWORD_LENGTH);

    // IF BOTH ARE VALID, ABLE TO PASS - IF NOT, CONTINUE DISABLED
    if (validEmail && validPassword) {
      setDisableLoginButton(false);
    } else setDisableLoginButton(true);
  }, [email, password]);

  // FUNCTION DEPENDS BACKEND (data)

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
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          // SEND USER TO RGISTER PAGE
          onClick={ () => navigate('/register') }
        >
          <Link to="/register">Cadastro</Link>
        </button>
        {/* {
          // RETURN BADLOGIN ERROR MESSAGE INCASE EMAIL IS INVALID OR ALREADY IN USE
          badLogin && (
            <span
              data-testid="common_login__element-invalid-email"
            >
              { errorMessage }
            </span>
          )
        } */}
      </form>
    </div>
  );
}
