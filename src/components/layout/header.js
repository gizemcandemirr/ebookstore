import React, { useEffect, useState } from "react";
import {
  HeartSvg,
  LoadingSvg,
  LogoSvg,
  SearchSvg,
  ShopSvg,
} from "../common/icons";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/slice/book";
import Link from "next/link";
import {  selectActiveButton } from "../../store/slice/button";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const activeButtonFind = useSelector(selectActiveButton);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const onSearch = () => {
    setIsLoading(true);
    setSearchTerm(query);
    dispatch(fetchBooks(query)).then(() => setIsLoading(false));
  };
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      setSearchTerm(query);
      dispatch(fetchBooks(query)).then(() => setIsLoading(false));
    }
  };
  

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      dispatch(fetchBooks(searchTerm)).then(() => setIsLoading(false));
    }
  }, [searchTerm, dispatch]);

  useEffect(() => {
    if (activeButtonFind && !query) {
      setSearchTerm(activeButtonFind.toLowerCase());
    }
  }, [activeButtonFind]);
  

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.link}>
        <div className={styles.logo}>
          <LogoSvg className={styles.bookIcon} />
          <span>E Book Store</span>
        </div>
      </Link>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={onSearch} className={styles.searchButton}>
          {isLoading ? (
            <LoadingSvg className={styles.loadingIcon} />
          ) : (
            <SearchSvg className={styles.searchIcon} />
          )}
        </button>
      </div>
      <div className={styles.shopContent}>
        <HeartSvg className={styles.heartIcon} />
        <Link href={"/basket"}>
          <ShopSvg className={styles.shopIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
