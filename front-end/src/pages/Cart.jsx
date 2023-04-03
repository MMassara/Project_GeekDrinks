import React, { useEffect, useState } from 'react';
import api, { setToken } from '../axios/config';
import AddressForm from '../components/Cart/AddressForm';
import Countdown from '../components/Cart/Countdown';
import Table from '../components/Cart/Table';
import Navbar from '../components/NavBar';
import calcTotalPrice from '../utils/calcTotalPrice';

export default function Cart() {
  const [products, setProducts] = useState([]);

  const [isFinish, setIsFinish] = useState(false);

  const [sellers, setSellers] = useState([]);

  const [newSale, setNewSale] = useState({
    userId: '',
    sellerId: '2',
    totalPrice: 0,
    deliveryAddress: '',
    deliveryNumber: '',
    products: [],
  });

  const [sallesApi, setSallesApi] = useState({});

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
    const getSellers = () => {
      setSellers([{ name: 'Fulana Pereira', id: 2 }]);
    };
    getSellers();
  }, []);

  useEffect(() => {
    const setTotalProductPrice = () => {
      if (products.length) {
        setNewSale((prevState) => ({
          ...prevState,
          totalPrice: Number(calcTotalPrice(products).replace(',', '.')),
          // userId: JSON.parse(localStorage.getItem('userId')),
          userId: 3,
          products: products.map(({ id, quantity }) => ({ productId: id, quantity })),
        }));
      }
    };
    setTotalProductPrice();
  }, [products]);

  const removeProduct = (index) => {
    const newArr = [...products];
    newArr.splice(index, 1);
    setProducts(newArr);
  };

  const finishPurchase = async (event) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));
    setToken(token);
    const { saleId } = await api.post('/sales', newSale);
    console.log(data);
    // colocar o id da venda que deve ser retornado pela API /sales
    setSallesApi(saleId);
    setIsFinish(true);
  };

  const handleChange = ({ target: { name, value } }) => {
    setNewSale((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section>
      {isFinish ? (
        <Countdown saleId={ sallesApi } />
      ) : (
        <section>
          <Navbar />
          <Table
            products={ products }
            removeProduct={ removeProduct }
          />
          <AddressForm
            sellers={ sellers }
            finishPurchase={ finishPurchase }
            handleChange={ handleChange }
          />
        </section>
      )}
    </section>
  );
}