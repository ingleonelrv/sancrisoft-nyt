import React from "react";
import "./styles/Search.css";
function Search(props) {
  return (
    <div>
      <div className="searchArea" id="searchArea">
        <div className="logo" id="logo">
          <div className="imgLogo">
            <img
              src="./new-york-times.svg"
              className="img-fluid"
              alt="The New York Times logo"
            />
          </div>
        </div>
        <div className="searchForm" id="searchForm">
          <div className="keyword">
            <div className="itemContainer">
              <label>Keywords</label>
              <input
                onChange={props.handleChangeInput}
                className="form-control"
                type="text"
                name="searchText"
                value={props.searchText}
              />
            </div>
          </div>
          <div className="type">
            <div className="itemContainer">
              <label>Types of Material</label>
              <select
                className="form-control"
                value={props.selectedType}
                onChange={props.handleChangeSelect}
              >
                {props.types &&
                  props.types.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="search">
            <div className="itemContainer btnSearchContainer">
              <button
                type="button"
                onClick={props.handleSearch}
                className="btn btn-primary btnSearch"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
