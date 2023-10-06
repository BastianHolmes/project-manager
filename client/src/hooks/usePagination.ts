import { useState } from "react";

export const usePagination = <T>(data: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const slicedData = Array.isArray(data)
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return { slicedData, totalPages, handlePageChange };
};
