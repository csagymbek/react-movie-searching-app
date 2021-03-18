import React from "react";

export const Pagination = ({ numberPages, nextPage, currentPage }) => {
  const pageLinks = [];
  for (let i = 1; i <= numberPages + 1; i++) {
    let active = currentPage === i && "active";
    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={i}
        onClick={() => nextPage(i)}
      >
        <a href="#">{i}</a>
      </li>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <ul className="pagination">
          {currentPage > 1 && (
            <li
              className={`waves-effect`}
              onClick={() => nextPage(currentPage - 1)}
            >
              <a href="#">Previous</a>
            </li>
          )}
          {pageLinks}
          {currentPage < numberPages + 1 && (
            <li
              className={`waves-effect`}
              onClick={() => nextPage(currentPage + 1)}
            >
              <a href="#">Next</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
