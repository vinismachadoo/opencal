import EventCard from "./EventCard";

const CardsSection = ({ filters, events }) => {
  // Filtros com true
  // const isTagSelected = (tag) => {

  //   filters.map((filter) => filter.name === tag && (filter.selected))
  // }

  return (
    <div className="py-3 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
      {events.map((evento) => (
        <EventCard key={evento.id} eventData={evento} />
      ))}
    </div>
  );
};

export default CardsSection;
