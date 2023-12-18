import ButtonList from "@/components/core/ButtonList";
import Layout from "@/components/layout";
import { fetchList, getList } from "@/store/bookSlice";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList())
    console.log(dispatch(fetchList()));
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.box}>
          <ButtonList />
        </div>
      </div>
    </Layout>
  );
}
