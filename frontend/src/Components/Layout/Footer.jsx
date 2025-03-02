import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { footercompanyLinks } from "../../Static/data"; // Only import company links
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white mt-auto"> {/* mt-auto pushes footer to the bottom */}
      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:px-6 px-4 py-8 sm:text-center">
        {/* Social Media Section */}
        <ul className="flex flex-col sm:block px-4 text-center sm:text-start items-center">
          <p className="mt-2 text-sm text-gray-400 max-w-[300px]">
            Thanks for helping farmers sell their products at a just price by connecting with them through us.
          </p>

          <div className="flex items-center mt-4 space-x-4">
            <a href="https://web.facebook.com/rahi680/" target="_blank">
              <AiFillFacebook size={18} className="text-gray-400 hover:text-[#3fd968] cursor-pointer" />
            </a>
            <a href="https://twitter.com/Asfak00" target="_blank">
              <AiOutlineTwitter size={18} className="text-gray-400 hover:text-[#3fd968] cursor-pointer" />
            </a>
            <a href="https://github.com/asfak00" target="_blank">
              <AiFillGithub size={18} className="text-gray-400 hover:text-[#3fd968] cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/asfakahmed22/" target="_blank">
              <AiFillInstagram size={18} className="text-gray-400 hover:text-[#3fd968] cursor-pointer" />
            </a>
          </div>
        </ul>

        {/* Company Links */}
        <div className="text-center sm:text-start">
          <h1 className="text-md font-semibold mb-2 text-[#3fd968]">Company</h1>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {footercompanyLinks?.map((link) => (
              <div key={link.name} className="mb-2">
                <Link
                  to={link.link}
                  className="text-xs text-gray-400 hover:text-[#3fd968] cursor-pointer duration-300">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-4 pt-2 text-center text-gray-400 gap-4 items-center border-t border-gray-800">
        <span className="text-xs">
          &copy; 2025{" "}
          <span className="text-[#2C5F34] font-bold cursor-pointer">
            KisaanBazar
          </span>{" "}
          . All rights reserved.
        </span>

        <span className="text-xs">
          Terms <sup className="font-[800]">.</sup> Privacy Policy
        </span>

        <div className="flex items-center justify-center">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment Methods"
            className="w-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;