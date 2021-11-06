import EventCard from "./EventCard";

const CardsSection = ({ events }) => {
  return (
    <div className="py-3 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
      {events.map((evento) => (
        <a key={evento.id} href="/event/2">
          <EventCard eventData={evento} />
        </a>
      ))}
    </div>
  );
};

export default CardsSection;
