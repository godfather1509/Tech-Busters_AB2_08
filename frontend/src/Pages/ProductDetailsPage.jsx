import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import ProductDetails from "../Components/Layout/ProductDetails";
import SuggestedProduct from "../Components/Layout/SuggestedProduct";
import { productData } from "../Static/data";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  // Convert product name from URL-friendly format to readable format
  const productName = name.replace(/-/g, " ");

  // Fetch product data when productName changes
  useEffect(() => {
    const product = productData.find((item) => item.name === productName);
    setData(product || null);
  }, [productName]); // ✅ Added productName as a dependency

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // ✅ Empty dependency array ensures it only runs once

  return (
    <>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
