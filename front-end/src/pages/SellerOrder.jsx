import axios from 'axios';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import SellerCard from '../components/SellerCard/SellerCard';

function SellerOrder() {
  const [orderArray, setOrderArray] = useState([]);
  // const [status, setStatus] = useState('');
  const history = useHistory();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/sales', { headers: { Authorization: token.token } }).then(({ data }) => {
      setOrderArray(data);
      // setStatus(data.status)
      // console.log('details', order)
      // console.log('Id', id)
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-product">
        <header>
          <NavBar />
        </header>
      </div>
      <main>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={ { backgroundColor: '#FFF3E0' } }
          sx={ { mt: 3, mb: 2 } }
        >
          {
            orderArray?.map((order) => (
              <SellerCard
                key={ order.id }
                order={ order }
                onClick={ () => history.push(`/seller/orders/${order.id}`) }
              />
            ))
          }
        </Grid>
      </main>
    </>
  );
}

export default SellerOrder;
