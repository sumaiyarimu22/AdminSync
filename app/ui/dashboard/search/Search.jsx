"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

const Search = ({ placeholder, setSearchQueary, serachQuery }) => {
  return (
    <div className={styles.container}>
      <MdSearch />

      <input
        type='text'
        placeholder={placeholder}
        className={styles.input}
        value={serachQuery}
        onChange={(e) => setSearchQueary(e.target.value)}
      />
    </div>
  );
};

export default Search;
