import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import styles from "../Styles/Style";

const faqData = [
  {
    id: 1,
    question: "How does this platform help farmers?",
    answer:
      "Our platform allows farmers to list their produce, connect directly with buyers, and negotiate fair prices without intermediaries, ensuring better profits.",
  },
  {
    id: 2,
    question: "How can buyers find nearby farmers?",
    answer:
      "Buyers can use the location-based matching feature to discover farmers within their preferred radius, reducing transportation costs and ensuring fresh produce.",
  },
  {
    id: 3,
    question: "Is there a fee for using the platform?",
    answer:
      "No, listing produce and connecting with buyers is free for farmers. However, there may be minimal transaction fees for secure payments.",
  },
  {
    id: 4,
    question: "How are payments processed?",
    answer:
      "Payments can be made securely through the platform using digital payment options, ensuring safe and hassle-free transactions for farmers and buyers.",
  },
  {
    id: 5,
    question: "Can farmers update their product listings?",
    answer:
      "Yes, farmers can update stock availability, prices, and descriptions in real-time using their dashboard for better order management.",
  },
  {
    id: 6,
    question: "How do buyers communicate with farmers?",
    answer:
      "Buyers can use the direct messaging feature to chat with farmers, negotiate prices, and confirm order details before purchasing.",
  },
];

const ExpandIcon = ({ isOpen }) => (
  <svg
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M9 5l7 7-7 7"}
    />
  </svg>
);

ExpandIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Ensures 'isOpen' is a required boolean
};

const FaqPage = () => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <>
      <Header activeHeading={5} />

      <div className={`${styles.section} my-8`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border-b border-gray-200 pb-4"
            >
              <button
                className="flex items-center justify-between w-full py-3"
                onClick={() => toggleTab(faq.id)}
                aria-expanded={activeTab === faq.id}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ExpandIcon isOpen={activeTab === faq.id} />
              </button>

              {activeTab === faq.id && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 text-gray-500 text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FaqPage;
