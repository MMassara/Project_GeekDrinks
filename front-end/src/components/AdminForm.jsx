import React, { useState, useEffect } from 'react';
import dataTestsIds from '../utils/dataTestIds';

function AdminForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
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

  return (
    <section>
      <section>
        <form className="adminRegister">
          <h2>Cadastrar novo usuário</h2>
          <input
            className="inputAdminManage"
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
            onChange={ handleChangeName }
            value={ name }
            data-testid={ dataTestsIds[65] }
            required
          />
          <input
            className="inputAdminManage"
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ handleChangeEmail }
            data-testid={ dataTestsIds[66] }
          />
          <input
            className="inputAdminManage"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={ handleChangePassword }
            value={ password }
            data-testid={ dataTestsIds[67] }
          />
          <select
            onChange={ handleChangeRole }
            name="role"
            data-testid={ dataTestsIds[69] }
            value={ role }
            required
          >
            <option value="">Please choose a role</option>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
          <button
            type="submit"
            className="registerBtn"
            data-testid={ dataTestsIds[68] }
            disabled={ disableLoginButton }
          >
            CADASTRAR
          </button>
        </form>
      </section>
    </section>
  );
}

export default AdminForm;
