import { Link } from 'react-router-dom';
import dataTestsIds from '../utils/dataTestIds';

function NavBar() {
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('products');
  };

  const storage = JSON.parse(localStorage.getItem('user')) || { name: 'usuário' };

  return (
    <div className="container-nav">
      <nav>
        <Link to="/customer/products">
          <div>
            <p data-testid={ dataTestsIds[11] }>Produtos</p>
          </div>
        </Link>

        <Link to={`/${storage.role}/orders`}>
          <div>
            <p data-testid={ dataTestsIds[12] }>Pedidos</p>
          </div>
        </Link>
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

      <div>
        <p data-testid={ dataTestsIds[13] }>{ storage.name }</p>
      </div>
    </div>
  );
}

export default NavBar;
