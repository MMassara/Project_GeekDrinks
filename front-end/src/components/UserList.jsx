import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dataTestsIds from '../utils/dataTestIds';

export default function UserList() {
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem('user'));
    setUser(userInformation);
  }, []);

  useEffect(() => {
    async function fetchAPI() {
      const getUsers = await axios.get('http://localhost:3001/admin/users');
      setUserList(getUsers);
    }
    if (user) {
      fetchAPI();
    }
  }, [user]);

  const remove = async (id) => {
    await axios.delete(`http://localhost:3001/admin/user/${id}`, { headers: { Authorization: user.token } });
    const getUsers = await axios.get('http://localhost:3001/admin/users');
    setUserList(getUsers);
  };

  return (
    <>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            console.log('list', userList) || userList.data?.map((item, index) => (
              <tr key={ user.id }>
                <td data-testid={ `${dataTestsIds[70]}${index}` }>{ item.id }</td>
                <td data-testid={ `${dataTestsIds[71]}${index}` }>{ item.name }</td>
                <td data-testid={ `${dataTestsIds[72]}${index}` }>{ item.email }</td>
                <td data-testid={ `${dataTestsIds[73]}${index}` }>{ item.role }</td>
                <td>
                  <button
                    type="button"
                    onClick={ () => remove(user.id) }
                    data-testid={ `${dataTestsIds[74]}${index}` }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
