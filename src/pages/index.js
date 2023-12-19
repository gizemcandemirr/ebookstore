import BookList from "../components/core/BookList";
import ButtonList from "../components/core/ButtonList";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";

export default function Home() {
  const { books } = useSelector((state) => state.books);
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
