import { useEffect, useState } from "react";
import Header from "../Components/Layout/Header";
import { productData } from "../Static/data";
import Product from "../Components/Layout/Product";
import Footer from "../Components/Layout/Footer";
import styles from "../Styles/Style";
import { motion } from "framer-motion";

const BestSellingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Group products by category
    const groupedData = productData.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});

    // Sort products within each category by total_sell
    for (const category in groupedData) {
      groupedData[category].sort((a, b) => b.total_sell - a.total_sell);
    }

    setData(groupedData);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeHeading={2} />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className={`${styles.section} bg-gray-100 flex-1 py-12`}
      >
        <h2 className="text-2xl font-semibold text-center text-[#2C5F34] mb-6">
          Products by Category
        </h2>

        {/* Render products by category */}
        {Object.keys(data).map((category, index) => (
          <div key={index} className="mb-8">
            {/* Stylish Category Header */}
            <div className="bg-gradient-to-r from-[#2C5F34] to-[#3fd968] p-4 rounded-t-lg">
              <h3 className="text-xl font-semibold text-white">
                {category}
              </h3>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white p-6 rounded-b-lg shadow-lg">
              {data[category].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white shadow-md rounded-lg p-4"
                >
                  <Product data={item} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
};

export default BestSellingPage;