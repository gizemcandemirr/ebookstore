import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import LightButton from "../../components/common/button";
import styles from "./BookDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/slice/book";
import { addToCart } from "../..//store/slice/card";
import { toast } from "react-toastify";
import Layout from "../../components/layout";
import { SALE_STATUS } from "../../utils/constant";
const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const book = books?.items && books?.items[0];

  useEffect(() => {
    dispatch(fetchBooks(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book));
      toast.success("Product added to cart!");
      router.push("/basket");
    } else {
      toast.error("Product not add to cart!");
    }
  };
  if (!books) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.bookDetail}>
          <div className={styles.bookImage}>
            {book?.volumeInfo?.imageLinks &&
              book?.volumeInfo?.imageLinks.thumbnail && (
                <Image
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt={`Cover of ${book?.volumeInfo?.title}`}
                  width={200}
                  height={300}
                  layout="responsive"
                />
              )}
          </div>
          <div className={styles.bookInfo}>
            <h1 className={styles.bookTitle}>{book?.volumeInfo?.title}</h1>
            <h4>
              {"Author" + ": " }{ book?.volumeInfo?.authors
                ? book?.volumeInfo?.authors
                : "Not Defined"}
            </h4>
            <h4>
              {"Description" + ": "}{  book?.searchInfo?.textSnippet
                ? book?.searchInfo?.textSnippet
                : "Not Defined"}
            </h4>
            <h4>
              {"Page Count" + ": "}{  book?.volumeInfo?.pageCount
                ? book?.volumeInfo?.pageCount
                : "Not Defined"}
            </h4>
            <h4>
              {"Detail" + ": " } { book?.volumeInfo?.description
                ? book?.volumeInfo?.description
                : "Not Defined"}
            </h4>

            <h3
              className={
                book?.saleInfo?.saleability === SALE_STATUS.NOT_FOR_SALE
                  ? styles.notForSaleAlert
                  : styles.onSaleAlert
              }
            >
              {book?.saleInfo?.saleability === SALE_STATUS.NOT_FOR_SALE
                ? "NOT FOR SALE"
                : "ON SALE"}{" "}
              {book?.saleInfo?.listPrice?.amount +
                " " +
                book?.saleInfo?.listPrice?.currencyCode}
            </h3>
          </div>
        </div>
        <div className={styles.addButton}>
          <LightButton text="Add to Cart" onClick={handleAddToCart} />
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
