import React from 'react';
import { useSelector } from 'react-redux';

const Card = () => {
  const cartItems = useSelector((state) => state?.cart);
  return (
    <div>
      <h2>Sepetim</h2>
      <ul>
        {cartItems?.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
