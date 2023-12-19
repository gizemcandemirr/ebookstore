import React, { useEffect, useState } from "react";
import { HeartSvg, LogoSvg, SearchSvg, ShopSvg } from "../common/icons";
import styles from "../../styles/Header.module.css";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../store/bookSlice";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("bestseller");
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const onSearch = () => {
    setSearchTerm(query);
  };
  useEffect(() => {
    dispatch(fetchBooks(searchTerm));
  }, [dispatch, searchTerm]);

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
        <Link href={'/card'}>
          <ShopSvg className={styles.shopIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
