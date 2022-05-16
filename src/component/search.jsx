import React, { useRef } from "react";
import "../css/search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Search = (props) => {
  const searchRef = useRef();
  function handleSearch(e) {
    e.preventDefault();
    props.onSearch(searchRef.current.value);
  }
  return (
    <section className="headBar">
      <a href="/" className="logo">
        <FontAwesomeIcon className="logo__img" icon={faYoutube} />
        <span className="logo__text">Youtube</span>
      </a>
      <form className="inputContainer" type="submit" onSubmit={handleSearch}>
        <input
          className="search__input"
          type="text"
          placeholder="검색"
          ref={searchRef}
        ></input>
        <button>
          <FontAwesomeIcon className="search__icon" icon={faSearch} />
        </button>
      </form>
    </section>
  );
};

export default Search;
