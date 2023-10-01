import React, { useState, useEffect } from "react";
import { CarCard } from "../CarCard/CarCard";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import "./CarList.css";
import { useParams, useNavigate } from "react-router-dom";
import { Pagination } from "../Pagination/Pagination";

export const CarList = ({ carData }) => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;
  useEffect(() => {
    if (pageNumber) {
      const parsedPageNumber = parseInt(pageNumber);
      if (!isNaN(parsedPageNumber)) {
        setCurrentPage(parsedPageNumber);
      }
    }
  }, [pageNumber]);

  useEffect(() => {
    navigate(`/page/${currentPage}`);
  }, [currentPage, navigate]);

  const filteredCars = carData.filter((car) =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="header">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch />
        </div>
        <a>
          Relevance <AiOutlineDown />
        </a>
        <a>
          All Brands <AiOutlineDown />
        </a>
      </div>

      <div className="car-list">
        {currentCars.map((car) => {
          return <CarCard key={car.id} car={car} />;
        })}
      </div>
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={filteredCars.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
