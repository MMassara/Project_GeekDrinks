import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import dataTestsIds from '../../utils/dataTestIds';
import './style.css';
import logoImage from '../../images/Logo-projeto.jpg';

function NavBar() {
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('products');
  };

  const storage = JSON.parse(localStorage.getItem('user')) || { name: 'usuário' };

  return (
    <div className="main-container">
      <nav className="nav-area">
        <img src={ logoImage } className="logo-class" alt="geek drinks" />
        <Stack spacing={ 2 } direction="row">
          <Button
            type="button"
            className="nav-button"
            data-testid={ dataTestsIds[11] }
            variant="contained"
            style={ { backgroundColor: '#D36934',
              height: '4vh',
              width: '120px',
              marginTop: '40px',
              textDecoration: 'none' } }
          >
            <Link to="/customer/products">
              Produtos
            </Link>
          </Button>
          <Button
            type="button"
            variant="contained"
            data-testid={ dataTestsIds[12] }
            style={ { backgroundColor: '#D36934',
              height: '4vh',
              width: '120px',
              marginTop: '40px',
              textDecoration: 'none' } }
          >
            <Link to={ `/${storage.role}/orders` }>
              Pedidos
            </Link>
          </Button>
        </Stack>
        <div className="logout-area">
          <p
            style={ { height: '4vh',
              width: '120px',
              fontSize: '20px',
              marginRight: '10px',
              marginTop: '45px' } }
            data-testid={ dataTestsIds[13] }
          >
            { storage.name }
          </p>
          <Link to="/">
            <Button
              type="button"
              onClick={ logout }
              variant="contained"
              style={ { backgroundColor: '#D36934',
                height: '4vh',
                width: '120px',
                marginTop: '40px',
                textDecoration: 'none' } }
              data-testid={ dataTestsIds[14] }
            >
              Logout
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
