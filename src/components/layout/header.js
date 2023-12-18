import React from "react";
import { LogoSvg, SearchSvg, ShopSvg } from "../common/icons";
import styles from "@/styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoSvg className={styles.bookIcon} />
        <span>E Book Store</span>
      </div>
      <div className={styles.searchBox}>
        <SearchSvg className={styles.searchIcon} />
        <input type="text" placeholder="Search" className={styles.searchInput}/>
      </div>
      <div className={styles.shopContent}>
      <ShopSvg className={styles.shopIcon} />
      </div>
    </div>
  );
};

export default Header;
