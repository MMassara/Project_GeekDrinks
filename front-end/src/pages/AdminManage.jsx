import React, { useState } from 'react';
import dataTestsIds from '../utils/dataTestIds';

function AdminManage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleChangeRole = ({ target: { value } }) => setRole(value);
  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeEmail = ({ target: { value } }) => setEmail(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);

  return (
    <section>
      <section>
        <form className="adminRegister">
          <input
            className="inputAdminManage"
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
            onChange={ handleChangeName }
            value={ name }
            data-testid={ dataTestsIds[65] }
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
          >
            <option value="">Please choose a role</option>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
          <button
            type="submit"
            className="registerBtn"
            data-testid={ dataTestsIds[68] }
          >
            CADASTRAR
          </button>
        </form>
      </section>
    </section>
  );
}

export default AdminManage;
