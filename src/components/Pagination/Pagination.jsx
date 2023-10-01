import React from "react";
import "./Pagination.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Pagination = ({
  carsPerPage,
  totalCars,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCars / carsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        <li>
          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <AiOutlineArrowLeft />
          </button>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className={`pagination-no ${
                currentPage === pageNumber ? "active-page" : ""
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        <li>
          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <AiOutlineArrowRight />
          </button>
        </li>
      </ul>
    </div>
  );
};
