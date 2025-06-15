import { useState } from "react";
const Rating = ({ onRate, rating }) => {
  const [hover, setHover] = useState(0);
  // const [rating, setRating] = useState(0);

  return (
    <div className="fle items-center mt-2">
      <div>Movie or book rating: </div>
      <div className="">
        {[...Array(5)].map((_, i) => {
          const index = i + 1;
          return (
            <span
              className={`cursor-pointer text-5xl ${
                index <= (rating || hover) ? "text-amber-400" : "text-gray-500"
              }`}
              onMouseEnter={() => {
                setHover(index);
              }}
              onMouseLeave={() => {
                setHover(0);
              }}
              onClick={() => {
                // setRating(index);
                onRate(index);
              }}
              key={index}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Rating;
