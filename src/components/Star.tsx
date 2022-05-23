import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Star = ({ selected = false, onSelect = (f: any) => f }) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};

const stars = (selectedStars: number, onSelect: any): JSX.Element => {
  const totalStars = 5;
  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onSelect(i)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

const StarRating = (): JSX.Element => {
  const [selectedStars, setSelectedStars] = useState(0);
  const updateStars = (i: number) => {
    setSelectedStars(i + 1);
  };
  return <div>{stars(selectedStars, updateStars)}</div>;
};

export default StarRating;
