import { Grid, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../axios/config';
import { checkEmailAndPassword, checkUser } from '../utils/checkUser';
import dataTestsIds from '../utils/dataTestIds';
import logo from '../images/Logo-projeto.jpg';

export default function Register() {
  // state para guardar os dados do usuario
  const [user, setUser] = useState({
    email: '', name: '', password: '',
  });
  // ativa e desativa o botao cadastre-se
  const [isDisable, setIsDisable] = useState(true);
  // controla msg de erro
  const [errorMessage, setErrorMessage] = useState('');
  // handlechange generico para controle de input
  const handleChange = ({ target: { name, value } }) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  // para mudar de rota
  const history = useHistory();
  // controle de rotas do usuario com base na role

  const register = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.post('http://localhost:3001/register', user);
      console.log(data);
      const { id, ...userInfo } = data;
      // guarda os dados do usuario do retorno da Api no local storage
      localStorage.setItem('user', JSON.stringify(userInfo));
      localStorage.setItem('userId', JSON.stringify(id));
      // pega a role da pessoa cadastrada
      history.push('/customer/products');
    } catch ({ response: { data: { message } } }) {
      // devolve o erro da Api
      setErrorMessage(message);
    }
  };

  const buttonStyle = {
    fontWeight: '600',
    color: '#FFF',
    background: '#C94E35',
    width: '90%',
    mt: 3,
    mb: 2,
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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={ { height: '100vh', backgroundColor: '#FFF3E0' } }
    >
      <img src={ logo } alt="logo do app de delivery" />
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
          label="Nome"
          type="text"
          name="name"
          sx={ { width: '90%', mt: 3, mb: 2 } }
          autoComplete="current-email"
          className="inputRegister"
          placeholder="Nome"
          onChange={ handleChange }
          value={ user.name }
          data-testid={ dataTestsIds[6] }
        />
        <TextField
          required
          component={ Paper }
          label="Email"
          type="email"
          name="email"
          sx={ { width: '90%', mt: 3, mb: 2 } }
          autoComplete="current-email"
          className="inputRegister"
          placeholder="Email"
          value={ user.email }
          onChange={ handleChange }
          data-testid={ dataTestsIds[7] }
        />
        <TextField
          required
          component={ Paper }
          label="Password"
          type="password"
          sx={ { width: '90%', mt: 2, mb: 3 } }
          autoComplete="current-password"
          name="password"
          className="inputRegister"
          placeholder="Senha"
          onChange={ handleChange }
          value={ user.password }
          data-testid={ dataTestsIds[8] }
        />
        <Button
          variant="contained"
          fullWidth
          sx={ buttonStyle }
          type="submit"
          className="registerBtn"
          disabled={ isDisable }
          data-testid={ dataTestsIds[9] }
          onClick={ register }
        >
          Cadastre-se
        </Button>
        <Button
          type="button"
          fullWidth
          variant="outlined"
          sx={ buttonStyle }
          className="registerLoginBtn"
          onClick={ () => history.push('/login') }
        >
          Já tenho conta
        </Button>
        <span
          className="registerError"
          data-testid={ dataTestsIds[10] }
          style={ { display: errorMessage ? 'block' : 'none' } }
        >
          {errorMessage}
        </span>
      </Grid>
    </Grid>
  );
}
