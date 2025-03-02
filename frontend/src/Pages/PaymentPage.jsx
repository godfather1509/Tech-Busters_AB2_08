import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Payment from "../Components/Layout/Checkout page/Payment/Payment";
import CheckoutSteps from "../Components/Layout/Checkout page/CheckoutSteps";

const PaymentPage = () => {
  return (
    <>
      <Header />
      <div className="mt-8 mb-16">
        <CheckoutSteps active={2} />
        <Payment />
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
