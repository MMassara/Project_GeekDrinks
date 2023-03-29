import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginApi from '../axios/config';
import { checkEmailAndPassword, checkUser } from '../utils/checkUser';
import dataTestsIds from '../utils/dataTestIds';

export default function Register() {
  const [user, setUser] = useState({
    email: '', name: '', password: '', role: 'customer',
  });
  const [isDisable, setIsDisable] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const history = useHistory();

  const translate = {
    administrator: '/administrator/products',
    seller: '/seller/products',
    customer: '/customer/products',
  };

  const register = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginApi.post('/register', user);
      const { id, ...userInfo } = data;
      localStorage.setItem('user', JSON.stringify(userInfo));
      localStorage.setItem('userId', JSON.stringify(id));
      history.push(translate[data.role]);
    } catch ({ response: { data: { message } } }) {
      // devolve o erro da Api
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    const validateForm = () => {
      const { email, password, name } = user;
      const check1 = Object.values(user).every((key) => key);
      const check2 = checkEmailAndPassword(email, password);
      const check3 = checkUser(name);
      if (check1 && check2 && check3) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    };
    validateForm();
  }, [user]);

  return (
    <section>
      <section>
        <form className="registerForm" onSubmit={ register }>
          <input
            className="inputRegister"
            type="text"
            name="name"
            placeholder="Nome"
            onChange={ handleChange }
            value={ user.name }
            data-testid={ dataTestsIds[6] }
          />
          <input
            className="inputRegister"
            type="email"
            name="email"
            placeholder="Email"
            value={ user.email }
            onChange={ handleChange }
            data-testid={ dataTestsIds[7] }
          />
          <input
            className="inputRegister"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={ handleChange }
            value={ user.password }
            data-testid={ dataTestsIds[8] }
          />
          <button
            type="submit"
            className="registerBtn"
            disabled={ isDisable }
            data-testid={ dataTestsIds[9] }
          >
            Cadastre-se
          </button>
          <button
            type="button"
            className="registerLoginBtn"
            onClick={ () => history.push('/login') }
          >
            Já tenho conta
          </button>
          <span
            className="registerError"
            data-testid={ dataTestsIds[10] }
            style={ { display: errorMessage ? 'block' : 'none' } }
          >
            {errorMessage}
          </span>
        </form>
      </section>
    </section>
  );
}
