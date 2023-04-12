import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dataTestsIds from '../utils/dataTestIds';

function NavBarAdmin() {
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
    <div className="container-nav">
      <nav>
        <h2
          data-testid={ dataTestsIds[12] }
        >
          Gerenciar Usuários
        </h2>
        <div>
          <p data-testid={ dataTestsIds[13] }>{ user?.name }</p>
        </div>
        <Link to="/">
          <div>
            <button
              type="button"
              onClick={ logout }
              data-testid={ dataTestsIds[14] }
            >
              Logout
            </button>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavBarAdmin;
