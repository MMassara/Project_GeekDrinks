import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar';
import CustomerCard from '../components/CustomerCard/CustomerCard';

function CustomerOrder() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/sales', { headers: { Authorization: token } }).then(({ data }) => {
      setOrders(data);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-product">
        <header>
          <Navbar />
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
            orders?.map((order) => (
              <CustomerCard
                key={ order.id }
                order={ order }
                onClick={ () => history.push(`/customer/orders/${order.id}`) }
              />
            ))
          }
        </Grid>
      </main>
    </>
  );
}

export default CustomerOrder;
