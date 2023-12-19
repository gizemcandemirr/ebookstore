import React, { useEffect, useState } from "react";
import { HeartSvg, LogoSvg, SearchSvg, ShopSvg } from "../common/icons";
import styles from "@/styles/Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "@/store/bookSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("react");
  const [query, setQuery] = useState("react");
  const { books, loading, error } = useSelector((state) => state.books);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const onSearch = () => {
    setSearchTerm(query);
  };
  useEffect(() => {
    dispatch(fetchBooks(searchTerm));
  }, [dispatch, searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoSvg className={styles.bookIcon} />
        <span>E Book Store</span>
      </div>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          value={query}
          onChange={handleSearchChange}
        />
        <button onClick={onSearch} className={styles.searchButton}>
          <SearchSvg className={styles.searchIcon} />
        </button>
      </div>
      <div className={styles.shopContent}>
        <HeartSvg className={styles.heartIcon} />
    
        <ShopSvg className={styles.shopIcon} />
      </div>
    </div>
  );
};

export default Header;
