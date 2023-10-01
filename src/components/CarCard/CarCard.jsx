import React from "react";
import "./CarCard.css";
import { GoPeople } from "react-icons/go";
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

export const CarCard = ({ car }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={car.image} alt={car.title} className="fit-image" />
      </div>
      <div className="title">
        <p className="car-title">{car.title}</p>
        <p className="car-year">{car.year}</p>
      </div>
      <div className="car-description">
        <p>
          <GoPeople /> {car.peoples}
        </p>
        <p>
          <BsFuelPump /> {car["eng-type"]}
        </p>
        <p>
          <SlSpeedometer /> {car.milage}
        </p>
        <p>
          <PiSteeringWheelDuotone /> {car["gear-type"]}
        </p>
      </div>
      <div className="card-bottom">
        <p className="price">${car.price}</p>
        <div className="btn-area">
          <span>
            <AiOutlineHeart />
          </span>
          <button className="rent-btn">Rent now</button>
        </div>
      </div>
    </div>
  );
};
