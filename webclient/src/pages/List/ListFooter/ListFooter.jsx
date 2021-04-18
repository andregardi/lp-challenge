import React from "react";
import { Link } from "react-router-dom";

const ListFooter = (props) => {
  const { currentPage, pagesCount } = props;
  const nextLink = currentPage < pagesCount && (
    <Link to={`/list/page/${currentPage + 1}`}>next</Link>
  );
  const previewsLink = currentPage > 1 && (
    <Link to={`/list/page/${currentPage - 1}`}>previews</Link>
  );
  return (
    <div>
      <span>Listing by page: 5</span>
      {previewsLink}
      <span>
        page {currentPage} of {pagesCount}
      </span>
      {nextLink}
    </div>
  );
};

export default ListFooter;
