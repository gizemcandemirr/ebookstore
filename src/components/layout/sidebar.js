import React from "react";
import styles from "../../styles/Sidebar.module.css";
import {
  BookmarkSvg,
  DiscoverSvg,
  HelpSvg,
  HomeSvg,
  SettingsSvg,
} from "../common/icons";
import Link from "next/link";
const Sidebar = () => {
  const menus = [
    { key: "Home", icon: <HomeSvg className={styles.icon} />, link: "/" },
    {
      key: "Discover",
      icon: <DiscoverSvg className={styles.icon} />,
      link: "/",
    },
    {
      key: "Bookmark",
      icon: <BookmarkSvg className={styles.icon} />,
      link: "/",
    },
    {
      key: "Settings",
      icon: <SettingsSvg className={styles.icon} />,
      link: "/",
    },
    { key: "Help", icon: <HelpSvg className={styles.icon} />, link: "/" },
  ];

  return (
    <div className={styles.container}>
      <ul>
        {menus.map((menu, key) => (
          <Link href={menu.link} key={key} className={styles.link}>
            <li className={styles.list}>
              {menu.icon}
              {menu.key}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
