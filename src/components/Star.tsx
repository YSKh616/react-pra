import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? "red" : "grey"} />;
};

const stars = (selectedStars: number): JSX.Element => {
  const totalStars = 5;
  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

const StarRating = (): JSX.Element => {
  const [selectedStars] = useState(4);
  return <div>{stars(selectedStars)}</div>;
};

export default StarRating;
