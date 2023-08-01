import React, { useState } from "react";
import review from "./data";
import "./Review.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = review[index];

    const checknumber = (number) => {
        if (number > review.length - 1) {
            return 0;
        }
        if (number < 0) {
            return review.length - 1;
        }
        return number;
    }
  const prevperson = () => {
    setIndex(() => {
      let newindex = index - 1;
      return checknumber(newindex);
    });
  };
  const nextperson = () => {
    setIndex(() => {
      let newindex = index + 1;
      return checknumber(newindex);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <span className="qoute-icon">
        <FaQuoteRight />
      </span>
      <h4 className="author"> {name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevperson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextperson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn">surprise me!</button>
    </article>
  );
};

export default Review;
