import PaymentForm from "./PaymentForm";
import styles from "./Core.module.css";
const PaymentModal = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalBackdrop} onClick={onClose}>
          x
        </div>
        <PaymentForm />
      </div>
    </>
  );
};

export default PaymentModal;
