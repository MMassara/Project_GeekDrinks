import { Link } from 'react-router-dom';
import dataTestsIds from '../utils/dataTestIds';

function NavBar() {
  return (
    <div 
      className="container-nav"
      data-testid='customer_products__element-navbar-link-products'
    >
      <nav>
        <Link to="/customer/products">
          <div>
            <p data-testid={ dataTestsIds[11] }>Produtos</p>
          </div>
        </Link>

        <Link to="/pedidos">
          <div>
            <p data-testid={ dataTestsIds[12] }>Pedidos</p>
          </div>
        </Link>
        
        <Link to="/">
          <div>
            <p>Logout</p>
          </div>
        </Link>
      </nav>

      <div>
        <p data-testid={ dataTestsIds[13] }>NOME</p>
      </div>
    </div>
  );
}

export default NavBar;