import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/Core.module.css";
import LightButton from "../common/button";

const BookList = ({ books }) => {
  const [visibleBooks, setVisibleBooks] = useState(5);
  const loadMoreBooks = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 10);
  };
  return (
    <div className={styles.bookList}>
      {books?.items?.slice(0, visibleBooks).map((book, index) => (
        <div key={index} className={styles.bookCard}>
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
