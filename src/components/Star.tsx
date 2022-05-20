import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? "red" : "grey"} />;
};

const stars = (): JSX.Element[] => {
  const totalStars = 5;
  return [...Array(totalStars)].map((_, i) => <Star key={i} />);
};

const StarRating = (): JSX.Element => {
  return <div>{stars()}</div>;
};

export default StarRating;
