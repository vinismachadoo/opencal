import EventCard from "./EventCard";
import Buttons from "./Buttons";
import Dropdown from "./Dropdown";

const EventPage = () => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="font-bold leading-7 text-gray-900 text-2xl md:text-3xl mb-3 sm:truncate">
            Título do evento
          </h2>
        </div>
        <div className="mb-3 flex lg:mt-0 lg:ml-4">
          <Buttons />
          {/* Buttons Dropdown */}
          <Dropdown />
        </div>
      </div>
      <EventCard />
    </>
  );
};

export default EventPage;
