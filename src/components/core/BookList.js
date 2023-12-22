import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Core.module.css";
import LightButton from "../common/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/card";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const BookList = ({ books }) => {
  const [visibleBooks, setVisibleBooks] = useState(4);
  const dispatch = useDispatch();
  const router = useRouter();

  const loadMoreBooks = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 4);
  };
  const handleAddToCart = (book) => {
    if (book) {
      dispatch(addToCart(book));
      toast.success("Product added to cart!");
      router.push("/basket");
    } else {
      toast.error("Product not add to cart!");
    }
  };
  return (
    <div className={styles.bookList}>
      {books?.items?.slice(0, visibleBooks).map((book, index) => (
        <div key={index} className={styles.bookCard}>
          <Link href={`/book-list/${book.id}`} passHref>
            <div className={styles.bookImage}>
              {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail && (
                  <Image
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`Cover of ${book.volumeInfo.title}`}
                    width={100}
                    height={100}
                  />
                )}
            </div>
            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>{book.volumeInfo.title}</h3>
              {book.volumeInfo.authors && (
                <p className={styles.bookAuthor}>
                  By {book.volumeInfo.authors.join(", ")}
                </p>
              )}
              {book.saleInfo && book.saleInfo.listPrice && (
                <>
                  <p className={styles.bookTitle}>
                    Price: {book.saleInfo.listPrice.amount}{" "}
                    {book.saleInfo.listPrice.currencyCode}
                  </p>
                </>
              )}
            </div>
          </Link>
          <div className={""}>
            <LightButton
              text="Add to Cart"
              onClick={() => handleAddToCart(book)}
            />
          </div>
        </div>
      ))}
      {visibleBooks < books?.items?.length && (
        <LightButton onClick={loadMoreBooks} text="More..." />
      )}
    </div>
  );
};

export default BookList;
