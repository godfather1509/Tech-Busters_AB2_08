import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";
import styles from "../../Styles/Style";

const DropDown = ({ setDropDown, categoriesData }) => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    navigate(`/products?category=${data.title}`);
    window.location.reload();
    setDropDown(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.4 }}
      className="absolute top-14 bg-white pb-4 w-[270px] rounded-b-md z-30 shadow-sm"
    >
      {categoriesData &&
        categoriesData.map((data, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex} hover:bg-gray-200 transition ease-linear cursor-pointer`}
            onClick={() => handleSubmit(data)}
          >
            <img
              src={data.image_Url}
              alt="category"
              className="w-[25px] h-[25px] object-contain ml-[10px] select-none"
            />
            <h3 className="m-3 cursor-pointer select-none">{data.title}</h3>
          </div>
        ))}
    </motion.div>
  );
};

// PropTypes validation
DropDown.propTypes = {
  setDropDown: PropTypes.func.isRequired,
  categoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image_Url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropDown;
