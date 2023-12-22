import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import LightButton from "../../components/common/button";
import styles from "./BookDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/slice/book";
import { addToCart } from "../..//store/slice/card";
import Layout from "../../components/layout";
import { SALE_STATUS } from "../../utils/constant";
import BookInfoComponent from "../../components/core/BookInfo";
import { useToast } from "../../hooks";

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const book = books?.items && books?.items[0];
  const showToast = useToast();

  useEffect(() => {
    dispatch(fetchBooks(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book));
      showToast("Product added to cart!",'success');
      router.push("/basket");
    } else {
      showToast("Product not add to cart!",'error');
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
          {book && <BookInfoComponent book={book} SALE_STATUS={SALE_STATUS} />}
        </div>
        <div className={styles.addButton}>
          <LightButton text="Add to Cart" onClick={handleAddToCart} />
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
