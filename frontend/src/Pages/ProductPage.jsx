import { useEffect, useState } from "react";
import Header from "../Components/Layout/Header";
import { productData } from "../Static/data";
import { useSearchParams } from "react-router-dom";
import Product from "../Components/Layout/Product";
import Footer from "../Components/Layout/Footer";
import styles from "../Styles/Style";

import { motion } from "framer-motion";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryData === null) {
      const d = productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d = productData.filter((data) => data.category === categoryData);
      setData(d);
    }
  }, [categoryData]);

  return (
    <>
      <Header activeHeading={3} />

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.5 }}
        className={styles.section}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-12 mt-12">
          {data?.map((item, index) => (
            <Product data={item} key={index} />
          ))}
        </div>

        {data?.length === 0 && (
          <h1 className="text-center font-bold text-xl sm:text-2xl text-[#2C5F34] mb-16">
            Product not found!
          </h1>
        )}
      </motion.div>

      <Footer />
    </>
  );
};

export default ProductPage;
