import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import LightButton from "../../components/common/button"; // Yolunuzu kontrol edin
import styles from "@/styles/BookDetail.module.css"; // CSS modülünüz için uygun yol
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "@/store/bookSlice";
import { addToCart } from "@/store/cardSlice";

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const book = books?.items && books?.items[0];

  useEffect(() => {
    dispatch(fetchBooks(id));
  }, [dispatch, id]);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  if (!books) {
    return <div>Loading...</div>;
  }

  return (
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
        <LightButton text="Add to Cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default BookDetail;
