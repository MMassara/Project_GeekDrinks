import React from 'react';
// import api from '../axios/config';

export default function UserList() {
  // const [user, setUser] = useState({});
  // const [userList, setUserList] = useState({});

  // useEffect(() => {
  //   const userInformation = JSON.parse(localStorage.getItem('user'));
  //   setUser(userInformation);
  // }, []);

  // useEffect(() => {
  //   async function fetchAPI(body) {
  //     const getUsers = await api.get('/admin/users', body);
  //     setUserList(getUsers);
  //   }
  //   if (user) {
  //   fetchAPI();
  //   }
  // }, [user]);

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
        <tbody />
      </table>
    </>
  );
}
