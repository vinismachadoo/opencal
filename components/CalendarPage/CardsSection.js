import EventCard from "./EventCard";

const CardsSection = () => {
  return (
    <div className="py-3 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default CardsSection;
