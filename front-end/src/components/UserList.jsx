import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  }

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
            console.log('list', userList) || userList.data?.map((user) => (
              <tr key={user.id}>
                <td>{ user.id }</td>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td>{ user.role }</td>
                <td>
                  <button
                    onClick={ () => remove(user.id) }
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
