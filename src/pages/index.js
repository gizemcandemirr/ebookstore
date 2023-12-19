import BookList from "@/components/core/BookList";
import ButtonList from "@/components/core/ButtonList";
import Layout from "@/components/layout";
import { fetchBooks, searchBooks } from "@/store/bookSlice";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { books, loading, error } = useSelector((state) => state.books);

  
  console.log(books);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.box}>
          <ButtonList />
          <BookList books={books} />
        </div>
      </div>
    </Layout>
  );
}
