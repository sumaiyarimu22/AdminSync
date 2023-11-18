"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search = ({ placeholder, getSearchResult }) => {
  const [query, setquery] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChnage = async (query) => {
    setquery(query);
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);

    const response = await fetch(`/api/user/search?query=${query}`);
    const user = await response.json();

    getSearchResult(user);
  };

  return (
    <div className={styles.container}>
      <MdSearch />

      <input
        type='text'
        placeholder={placeholder}
        className={styles.input}
        value={query}
        onChange={(e) => handleChnage(e.target.value)}
      />
    </div>
  );
};

export default Search;
