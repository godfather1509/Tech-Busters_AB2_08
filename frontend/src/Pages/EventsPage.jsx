import { useEffect } from "react";
import Header from "../Components/Layout/Header";
import EventCard from "../Components/Layout/EventCard";
import Footer from "../Components/Layout/Footer";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header activeHeading={4} />

      <div className="bg-gray-100 min-h-screen py-12 flex justify-center">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
          <EventCard active={true} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventsPage;
