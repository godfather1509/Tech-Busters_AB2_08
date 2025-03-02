import styles from "../../Styles/Style";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div
      className={`${styles.noramlFlex} relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat`}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h4 className="text-[34px] 800px:text-[60px] font-[700] capitalize text-[#2C5F34] leading-[1.2] drop-shadow-lg">
          Fresh Harvest <br />
          Direct to Your Doorstep
        </h4>

        <p className="pt-5 font-[400] font-Poppins text-[18px] 800px:text-[20px] text-[#3d3a3a] leading-relaxed">
          Experience the freshest produce straight from local farms to your kitchen. Our farmers work tirelessly to bring you the best quality fruits, vegetables, and dairy products, ensuring you get the most nutritious and flavorful ingredients.
        </p>

        <ul className="pt-3 font-[400] font-Poppins text-[18px] 800px:text-[20px] text-[#3d3a3a] list-disc list-inside leading-relaxed">
          <li className="mb-2">
            <strong>Direct from Farmers</strong>: No middlemen, just pure farm-fresh goodness.
          </li>
          <li className="mb-2">
            <strong>100% Natural</strong>: Grown with care, free from harmful chemicals.
          </li>
          <li className="mb-2">
            <strong>Support Local Farmers</strong>: Your purchase helps sustain local farming communities.
          </li>
        </ul>

        <Link to={"/products"} className="inline-block mt-8">
          <div className={`${styles.button} bg-[#2C5F34] hover:bg-[#24522a] transition-all duration-300`}>
            <span className="text-white font-Poppins text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;