import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Paper, TextField } from '@mui/material';
import styled from 'styled-components';
import dataTestsIds from '../utils/dataTestIds';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 60px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Form = styled.form`
  background-color: #EEB82E;
  box-shadow: 8px 12px 8px grey;
  padding: 50px;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: #FFF;
  font-family: 'Press Start 2P', cursive;
`;

const Select = styled.select`
  width: 230px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
`;

const Button = styled.button`
  font-weight: 600;
  color: #FFF;
  background: #D36934;
  width: 15%;
  padding: 17px;
  border: 0;
  border-color: 1px solid #234da0;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: #b7442d;
    transition:  0.32s ease-in-out;
  }
`;

function AdminForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [user, setUser] = useState({});
  const [disableLoginButton, setDisableLoginButton] = useState(true);

  const handleChangeRole = ({ target: { value } }) => setRole(value);
  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeEmail = ({ target: { value } }) => setEmail(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);

  // CREATE VALIDATIONS FOR EMAIL, PASSWORD, NAME AND ROLE
  useEffect(() => {
    const PASSWORD_LENGTH = 6;
    const NAME_LENGTH = 12;
    const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    const validPassword = (password.length >= PASSWORD_LENGTH);
    const validName = (name.length >= NAME_LENGTH);

    // IF VALID, ABLE TO PASS - IF NOT, CONTINUE DISABLED --- BUTTON
    if (validEmail && validPassword && validName && role !== '') {
      setDisableLoginButton(false);
    } else {
      setDisableLoginButton(true);
    }
  }, [email, password, name, role]);

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem('user'));
    setUser(userInformation);
  }, []);

  const register = async () => {
    await axios.post('http://localhost:3001/admin/user/register', {
      name,
      email,
      password,
      role,
    }, { headers: { authorization: user.token } });
  };
  return (
    <Section>
      <Form>
        <Title>Cadastrar novo usuário</Title>
        <Div>
          <TextField
            type="text"
            name="name"
            component={ Paper }
            sx={ { width: '90%', mt: 2, mb: 3 } }
            placeholder="Nome e sobrenome"
            onChange={ handleChangeName }
            value={ name }
            data-testid={ dataTestsIds[65] }
            required
          />
          <TextField
            type="email"
            name="email"
            component={ Paper }
            sx={ { width: '90%', mt: 2, mb: 3 } }
            placeholder="Email"
            value={ email }
            onChange={ handleChangeEmail }
            data-testid={ dataTestsIds[66] }
          />
          <TextField
            type="password"
            name="password"
            component={ Paper }
            sx={ { width: '90%', mt: 2, mb: 3 } }
            placeholder="Senha"
            onChange={ handleChangePassword }
            value={ password }
            data-testid={ dataTestsIds[67] }
          />
          <Select
            onChange={ handleChangeRole }
            name="role"
            data-testid={ dataTestsIds[69] }
            value={ role }
            required
          >
            <option value="">Please choose a role</option>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </Select>
          <Button
            type="button"
            data-testid={ dataTestsIds[68] }
            disabled={ disableLoginButton }
            onClick={ register }
          >
            CADASTRAR
          </Button>
        </Div>
      </Form>
    </Section>
  );
}

export default AdminForm;
