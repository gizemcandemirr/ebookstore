import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LightButton from "../../components/common/button"; // Yolunuzu kontrol edin
import styles from "@/styles/BookDetail.module.css"; // CSS modülünüz için uygun yol
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "@/store/bookSlice";
import { addToCart } from "@/store/cardSlice";
import { toast } from "react-toastify";

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
      router.push("/card");
    } else {
      toast.error("Product not add to cart!");
    }
  };
  if (!books) {
    return <div>Loading...</div>;
  }
  return (
    <>
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
          <h4>{book?.searchInfo?.textSnippet}</h4>
        </div>
      </div>
      <div className={styles.addButton}>
        <LightButton text="Add to Cart" onClick={handleAddToCart} />
      </div>
    </>
  );
};

export default BookDetail;
