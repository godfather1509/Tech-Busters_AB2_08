import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Checkout from "../Components/Layout/Checkout page/Checkout";
import CheckoutSteps from "../Components/Layout/Checkout page/CheckoutSteps";

function CheckoutPage() {
  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen py-12 flex flex-col items-center">
        <CheckoutSteps active={1} className="mb-6" />

        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <Checkout />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CheckoutPage;
