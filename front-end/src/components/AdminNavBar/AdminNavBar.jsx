import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import dataTestsIds from '../../utils/dataTestIds';
import logoImage from '../../images/Logo-projeto2.png';
import './style.css';

function AdminNavBar() {
  const [user, setUser] = useState();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('products');
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user')) || { name: 'usuário' };
    setUser(data);
  }, []);

  return (
    <nav className="navBar-admin">
      <img src={ logoImage } className="logo-class" alt="geek drinks" />
      <h2
        data-testid={ dataTestsIds[12] }
        className="title-page"
      >
        Gerenciar Usuários
      </h2>
      <div className="buttonAndAdmin">
        <p data-testid={ dataTestsIds[13] }>{ user?.name }</p>
        <Link
          to="/"
          style={ {
            textDecoration: 'none',
            color: 'white',
          } }
        >
          <Button
            type="button"
            onClick={ logout }
            data-testid={ dataTestsIds[14] }
            variant="contained"
            style={ {
              backgroundColor: '#D36934',
              height: '4vh',
              width: '120px',
              textDecoration: 'none',
            } }
          >
            Logout
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default AdminNavBar;
