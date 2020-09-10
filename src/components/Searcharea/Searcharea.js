import React from "react";
import "./Searcharea.scss";
const Searcharea = props => {
  return (
    <div className="searcharea">
      <div className="searcharea__inner">
        <form onSubmit={props.searchBook} action="">
          <input type="text" onChange={props.handleSearch} />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Searcharea;
