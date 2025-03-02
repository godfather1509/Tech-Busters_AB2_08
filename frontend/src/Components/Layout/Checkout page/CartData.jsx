import PropTypes from "prop-types";
import styles from "../../../Styles/Style";
import { motion } from "framer-motion";

const CartData = ({ handleSubmit, couponCode, setCouponCode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white rounded-md p-5 pb-8 shadow-md"
    >
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#2C5F34]">Subtotal:</h3>
        <h5 className="text-[18px] font-[600]">$2000</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#2C5F34]">Shipping:</h3>
        <h5 className="text-[18px] font-[600]">$10</h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#2C5F34]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">-</h5>
      </div>
      <h5 className="text-[18px] font-[600] text-end pt-3">$2010</h5>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${styles.input} h-[40px] pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5F34]`}
          placeholder="Coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <input
          className="w-full h-[40px] border border-[#2C5F34] text-center text-[#2C5F34] rounded-md mt-4 cursor-pointer hover:bg-[#2C5F34] transition-all hover:text-white font-semibold"
          required
          value="Apply code"
          type="submit"
        />
      </form>
    </motion.div>
  );
};

// ✅ Added PropTypes for validation
CartData.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  couponCode: PropTypes.string.isRequired,
  setCouponCode: PropTypes.func.isRequired,
};

export default CartData;
