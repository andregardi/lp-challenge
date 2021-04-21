import React from "react";
import { Link } from "react-router-dom";
import styles from "./ListFooter.module.css";
import { ReactComponent as ArrowIcon } from "./arrowIcon.svg";

const ListFooter = (props) => {
  const { currentPage, pagesCount, searchParam } = props;
  const searchUrlParam = searchParam ? `&searchParam=${searchParam}` : "";

  const activeNextLink = currentPage < pagesCount;
  const activePreviewsLink = currentPage > 1;

  const grayFill = "#ccc";

  const nextLink = activeNextLink ? (
    <Link to={`/list?page=${currentPage + 1}${searchUrlParam}`}>
      <ArrowIcon className={styles.nextIcon} />
    </Link>
  ) : (
    <ArrowIcon className={styles.nextIcon} fill={grayFill} />
  );

  const previewsLink = activePreviewsLink ? (
    <Link to={`/list?page=${currentPage - 1}${searchUrlParam}`}>
      <ArrowIcon className={styles.previewsIcon} />
    </Link>
  ) : (
    <ArrowIcon className={styles.previewsIcon} fill={grayFill} />
  );

  return (
    <div className={styles.listFooter}>
      <span>Listing by page: 5</span>
      <span>
        page {currentPage} of {pagesCount}
      </span>
      {previewsLink}
      {nextLink}
    </div>
  );
};

export default ListFooter;
