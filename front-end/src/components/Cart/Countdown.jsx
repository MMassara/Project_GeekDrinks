import propTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function Countdown({ saleId }) {
  const COUNT = 3;
  const [countdown, setCountdown] = useState(COUNT);
  const intervalRef = useRef(null);
  const history = useHistory();
  const TIME = 1000;

  useEffect(() => {
    if (countdown <= 0) history.push(`/customer/orders/${saleId}`);
  }, [countdown, history, saleId]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, TIME);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="countdown">
      <span className="countdown-text">
        Compra realizada com sucesso!
      </span>
      <span className="countdown-text">
        {`Você será redirecionado em ${countdown}...`}
      </span>
    </section>
  );
}

Countdown.propTypes = {
  saleId: propTypes.number.isRequired,
};
