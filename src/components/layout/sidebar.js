import React from "react";
import styles from "@/styles/Sidebar.module.css";
import {
  BookmarkSvg,
  DiscoverSvg,
  HelpSvg,
  HomeSvg,
  SettingsSvg,
} from "../common/icons";
const Sidebar = () => {
  const menus = [
    { key: "Home", icon: <HomeSvg className={styles.icon} /> },
    { key: "Discover", icon: <DiscoverSvg className={styles.icon} /> },
    { key: "Bookmark", icon: <BookmarkSvg className={styles.icon} /> },
    { key: "Settings", icon: <SettingsSvg className={styles.icon} /> },
    { key: "Help", icon: <HelpSvg className={styles.icon} /> },
  ];

  return (
    <div className={styles.container}>
      <ul>
        {menus.map((menu, key) => (
          <li key={key} className={styles.list}>
            {menu.icon}
            {menu.key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
