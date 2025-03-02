import styles from "../../Styles/Style";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Fun Facts and Information</h1>
      </div>

      <div className="w-full">
        <EventCard />
      </div>
    </div>
  );
};

export default Events;