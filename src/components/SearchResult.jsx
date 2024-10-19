import React from "react";

const SearchResult = ({ data, spinner }) => {
  return (
    <div className="result pt-5 pb-5 text-center">
      {spinner ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul>
          {data.map((el) => (
            <li key={el.score}>{el.word}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
