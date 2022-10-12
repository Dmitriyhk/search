import React from "react";
import classNames from "classnames";
import "../App.scss";

const Search = ({ value, setValue }) => {
  return (
    <label
      className={classNames("search", { ["search_hints"]: value.length > 0 })}
    >
      <p>Компания</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </label>
  );
};

export default Search;
