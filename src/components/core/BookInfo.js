import React from 'react';
import styles from '../../pages/book-list/BookDetail.module.css';

const BookAttribute = ({ label, value }) => (
  <h4>{`${label}: ${value || 'Not Defined'}`}</h4>
);

const SaleStatus = ({ saleInfo, SALE_STATUS }) => (
  <h3 className={saleInfo?.saleability === SALE_STATUS.NOT_FOR_SALE ? styles.notForSaleAlert : styles.onSaleAlert}>
    {saleInfo?.saleability === SALE_STATUS.NOT_FOR_SALE ? 'NOT FOR SALE' : 'ON SALE'} {saleInfo?.listPrice?.amount} {saleInfo?.listPrice?.currencyCode}
  </h3>
);

const BookInfoComponent = ({ book, SALE_STATUS }) => (
  <div className={styles.bookInfo}>
    <h1 className={styles.bookTitle}>{book?.volumeInfo?.title}</h1>
    <BookAttribute label="Author" value={book?.volumeInfo?.authors} />
    <BookAttribute label="Description" value={book?.searchInfo?.textSnippet} />
    <BookAttribute label="Page Count" value={book?.volumeInfo?.pageCount} />
    <BookAttribute label="Detail" value={book?.volumeInfo?.description} />
    {book?.saleInfo && <SaleStatus saleInfo={book.saleInfo} SALE_STATUS={SALE_STATUS} />}
  </div>
);

export default BookInfoComponent;
