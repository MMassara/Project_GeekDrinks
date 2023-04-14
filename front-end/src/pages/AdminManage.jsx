import React, {
useState,
// useEffect,
} from 'react';

import AdminForm from '../components/AdminForm';
import AdminNavBar from '../components/AdminNavBar/AdminNavBar';
import UserList from '../components/UserList';
// import api from '../axios/config';

function AdminManage() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <AdminNavBar />
      <AdminForm setClick={ setClick } click={ click } />
      <UserList click={ click } />
    </div>
  );
}

export default AdminManage;
