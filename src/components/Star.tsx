import { FaStar } from "react-icons/fa";

const Star = () => {
  return (
    <>
      {[
        <FaStar color="red"></FaStar>,
        <FaStar color="red"></FaStar>,
        <FaStar color="red"></FaStar>,
        <FaStar color="gray"></FaStar>,
        <FaStar color="gray"></FaStar>,
      ]}
    </>
  );
};

export default Star;
