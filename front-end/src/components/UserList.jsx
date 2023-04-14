import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dataTestsIds from '../utils/dataTestIds';

const AdminUserTable = styled.table`
  margin-top: 30px;
  .tableOrder-id {
    background-color: #DC8332;
  }

  .tableOrder-name {
    background-color: #FFF;
    width: 98%;
    margin: 5px;
  }

  .tableOrder-email {
    background-color: #DC8332;
    margin: 5px;
  }

  .tableOrder-role {
    background-color: #FFF;
  }

  .tableOrder-button {
    background-color: #DC8332;
    border: none;
    width: 100%
  }
  
  .tableOrder-item {
    display: flex;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

const Div = styled.div`
  width: 90%;
  background-color: #EEB82E;
  // box-shadow: 8px 12px 8px grey;
  padding: 50px;
  border-radius: 5px;
  padding: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

const Title = styled.h2`
  color: #FFF;
  // font-family: 'Press Start 2P', cursive;
`;

export default function UserList({ click }) {
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem('user'));
    setUser(userInformation);
  }, []);

  async function fetchAPI() {
    const getUsers = await axios.get('http://localhost:3001/admin/users');
    setUserList(getUsers);
  }

  useEffect(() => {
    if (user) {
      fetchAPI();
    }
  }, [user, click]);

  const remove = async (id) => {
    console.log('testetable');
    console.log('id', id);
    await axios.delete(`http://localhost:3001/admin/user/${id}`, { headers: { Authorization: user.token } });
    fetchAPI();
  };

  return (
    <Section>
      <Div>
        <Title>Lista de usuários</Title>
        <AdminUserTable>
          <thead>
            <tr>
              <th>ID</th>
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
                  <td data-testid={ `${dataTestsIds[70]}${index}` }>
                    <p className="tableOrder-id tableOrder-item">{item.id}</p>
                  </td>
                  <td data-testid={ `${dataTestsIds[71]}${index}` }>
                    <p className="tableOrder-name tableOrder-item">{item.name}</p>
                  </td>
                  <td data-testid={ `${dataTestsIds[72]}${index}` }>
                    <p className="tableOrder-email tableOrder-item">{item.email}</p>
                  </td>
                  <td data-testid={ `${dataTestsIds[73]}${index}` }>
                    <p className="tableOrder-role tableOrder-item">{item.role}</p>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="tableOrder-button tableOrder-item"
                      onClick={ () => remove(item.id) }
                      data-testid={ `${dataTestsIds[74]}${index}` }
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </AdminUserTable>
      </Div>
    </Section>
  );
}
