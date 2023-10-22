import React from "react";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? styles.active : ""}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li
        className={currentPage === 1 ? styles.disabled : ""}
        onClick={handlePrevPageClick}
      >
        &laquo;
      </li>
      {renderPageNumbers()}
      <li
        className={currentPage === totalPages ? styles.disabled : ""}
        onClick={handleNextPageClick}
      >
        &raquo;
      </li>
    </ul>
  );
};

export default Pagination;
