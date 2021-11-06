import {
  TicketIcon,
  CalendarIcon,
  LocationMarkerIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";

export const Cover = () => {
  return (
    <div className="w-full md:w-1/3 overflow-hidden rounded-t-md md:rounded-l-md md:rounded-r-none relative mb-2 md:mb-0 h-fit">
      <img
        src={`/signin.jpg`}
        alt=""
        className="object-cover absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
      />
    </div>
  );
};

const EventCard = () => {
  return (
    <div className="border block md:flex border-gray-300 rounded-md mt-2 shadow-sm text-sm text-gray-700">
      <Cover />
      <div className="flex flex-col md:ml-2 p-3 md:p-3 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Data do evento
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <LocationMarkerIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Endereço do evento
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <TicketIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Lote + valor atual
        </div>
        <div className="flex items-top text-sm text-gray-500">
          <InformationCircleIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cum sit
          velit rerum impedit ratione vero accusantium quod ea itaque
          consequuntur, dolorum, non deleniti aliquid qui natus sint quaerat
          repudiandae?
        </div>
      </div>
    </div>
  );
};

export default EventCard;
