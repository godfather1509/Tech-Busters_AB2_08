import { motion } from "framer-motion";
import Header from "../Components/Layout/Header";
import Hero from "../Components/Layout/Hero";
import Categories from "../Components/Layout/Categories";
import BestDeals from "../Components/Layout/BestDeals";
import FeaturedProduct from "../Components/Layout/FeaturedProduct";
import Events from "../Components/Layout/Events";
import Footer from "../Components/Layout/Footer";

const HomePage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <main>
          <Hero />
          <Categories />
          <BestDeals />
          <Events />
          <FeaturedProduct />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;
