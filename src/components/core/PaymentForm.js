import { useForm } from "react-hook-form";
import LightButton from "../common/button";
import { useRouter } from "next/router";
import styles from "./Core.module.css";
import { useToast } from "../../hooks";
const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const showToast = useToast();

  const onSubmit = (data) => {
    if (
      !errors?.cardNumber?.type &&
      !errors?.expiryDate?.type &&
      !errors?.cvv?.type
    ) {
      showToast("Payment was made successfully!", "success");
      router.push("/basket");
    } else {
      showToast("Please fill in the required fields", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Card Number</label>
      <input
        {...register("cardNumber", { required: true, pattern: /^[0-9]{16}$/ })}
        placeholder="Card Number"
      />
      {errors.cardNumber && (
        <p className={styles.label}>*Card number is invalid</p>
      )}
      <label>Expiry Date</label>

      <input
        {...register("expiryDate", {
          required: true,
          pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
        })}
        placeholder="Expiration date (AA/YY)"
      />
      {errors.expiryDate && (
        <p className={styles.label}>*Expiration date is invalid</p>
      )}
      <label>CVV</label>

      <input
        {...register("cvv", { required: true, pattern: /^[0-9]{3,4}$/ })}
        placeholder="CVV"
      />
      {errors.cvv && <p className={styles.label}>*CVV is invalid</p>}

      <LightButton text="Pay" onClick={onSubmit} />
    </form>
  );
};

export default PaymentForm;
