import React, { useEffect, useRef } from "react";
const SearchBar = ({ query, setQuery }) => {
  const inputElement = useRef(null);
  useEffect(() => {
    const callBack = (e) => {
      if (document.activeElement === inputElement.current) return;

      if (e.code === "Enter") inputElement.current.focus();
    };
    document.addEventListener("keydown", callBack);
    return () => document.addEventListener("keydown", callBack);
  });
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
};

export default SearchBar;
