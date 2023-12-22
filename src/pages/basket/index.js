import Layout from "../../components/layout";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.css";
import LightButton from "../../components/common/button";
import PaymentModal from "../../components/core/PaymentModal";
import { removeFromCart } from "../../store/slice/card";

const Card = () => {
  const { carts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const uniqueCartItems = [];
  const itemCounts = new Map();
  const [isModalOpen, setIsModalOpen] = useState(false);

  carts?.items?.forEach((item) => {
    const count = itemCounts.get(item.id) || 0;
    itemCounts.set(item.id, count + 1);
    if (!uniqueCartItems.find((uniqueItem) => uniqueItem.id === item.id)) {
      uniqueCartItems.push(item);
    }
  });
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const totalAmount = carts?.items?.reduce((total, item) => {
    return total + (item.saleInfo.listPrice?.amount || 0);
  }, 0);

  return (
    <Layout>
      <h2 className={styles.header}>My Card</h2>
      {uniqueCartItems?.map((item, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.titleandButton}>
            <button className={styles.exit} onClick={() => handleRemove(item)}>
              Out List
            </button>

            <h3
              className={!item.saleInfo.listPrice?.amount ? styles.notSale : ""}
            >
              {item.volumeInfo?.title}(Quantity: {itemCounts.get(item.id)})
            </h3>
          </div>

          <h3
            className={!item.saleInfo.listPrice?.amount ? styles.notSale : ""}
          >
            {item.saleInfo.listPrice?.amount
              ? item.saleInfo.listPrice?.amount
              : "Not Sale"}
          </h3>
        </div>
      ))}
      <div className={styles.card}>
        <h3>Total:</h3>
        <h3>{totalAmount}</h3>
      </div>
      <div className={styles.card}>
        <LightButton onClick={handleOpenModal} text="Complete Payment" />
        {isModalOpen && totalAmount && (
          <PaymentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(!isModalOpen)}
          />
        )}
      </div>
    </Layout>
  );
};

export default Card;
