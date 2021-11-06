import {
  ThumbUpIcon as ThumbUpIconOutline,
  ThumbDownIcon as ThumbDownIconOutline,
  BookmarkIcon as BookmarkIconOutline,
} from "@heroicons/react/outline";
import {
  ThumbUpIcon as ThumbUpIconSolid,
  ThumbDownIcon as ThumbDownIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

const EventCard = ({ eventData }) => {
  const today = new Date();
  const lastUpdate = new Date(
    eventData.lastUpdate.year,
    eventData.lastUpdate.month - 1,
    eventData.lastUpdate.day,
    eventData.lastUpdate.hour,
    eventData.lastUpdate.minute
  );
  const daysSinceLastUpdate = (today - lastUpdate) / 86400000;

  const [isHeartOutline, setIsHeartOutline] = useState(true);
  const [isUpVoteOutline, setIsUpVoteOutline] = useState(true);
  const [isDownVoteOutline, setIsDownVoteOutline] = useState(true);

  return (
    <div className="bg-white rounded-xl w-full flex md:block md:h-auto">
      <div className="bg-gray-800 relative overflow-hidden group w-1/3 h-auto md:w-full md:h-40 rounded-l-xl md:rounded-t-xl md:rounded-bl-none">
        {/* Capa do evento */}
        <img
          src={eventData.coverLink}
          alt="boy with camera"
          className="object-cover absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full md:group-hover:opacity-30 md:relative"
        />
        {/* Hashtags */}
        <div className="md:p-2 hidden md:flex-row md:group-hover:block md:absolute md:top-0">
          <div className="flex flex-wrap">
            {eventData.tags.map((tag, idx) => (
              <div
                key={idx}
                className="m-0.5 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white font-semibold"
              >
                {`#${tag.toLowerCase()}`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 md:w-full">
        {/* <!-- content --> */}
        <div className="p-2 md:p-4 border-r-2 border-t-2 rounded-tr-md md:border-l-2 md:border-t-0 md:rounded-none  border-gray-100">
          <h3 className="font-bold text-md line-clamp-1">{eventData.title}</h3>
          {/* Endereço */}
          <div className="flex items-center text-xs font-semibold rounded-md mb-3 text-gray-800 w-auto">
            {/* <LocationMarkerIcon
              className="flex-shrink-0 mr-1 h-3 w-3"
              aria-hidden="true"
            /> */}
            <span className="line-clamp-1">
              {eventData.hasLocal ? eventData.local : "Indefinido"}
              {eventData.hasAddress ? `, ${eventData.address}` : ""}
            </span>
          </div>
          <div className="flex justify-end md:justify-center mt-2 md:mt-4">
            {/* Ações */}
            <div className="flex items-center text-gray-600 font-semilight">
              {isHeartOutline ? (
                <BookmarkIconOutline
                  className="flex-shrink-0 mr-0.25 md:mr-0.5 h-4 md:h-5 w-4 md:w-5 cursor-pointer hover:text-red-500"
                  aria-hidden="true"
                  onClick={() => setIsHeartOutline(!isHeartOutline)}
                />
              ) : (
                <BookmarkIconSolid
                  className="flex-shrink-0 mr-0.25 md:mr-0.5 h-4 md:h-5 w-4 md:w-5 cursor-pointer text-red-500"
                  aria-hidden="true"
                  onClick={() => setIsHeartOutline(!isHeartOutline)}
                />
              )}
              <span className="mr-2 md:mr-3 text-xs md:text-sm">
                {eventData.favorites}
              </span>
              {isUpVoteOutline ? (
                <ThumbUpIconOutline
                  className="flex-shrink-0 mr-0.25 md:mr-0.5 h-4 md:h-5 w-4 md:w-5 cursor-pointer hover:text-blue-500"
                  aria-hidden="true"
                  onClick={() => setIsUpVoteOutline(!isUpVoteOutline)}
                />
              ) : (
                <ThumbUpIconSolid
                  className="flex-shrink-0 mr-0.25 md:mr-0.5 h-4 md:h-5 w-4 md:w-5 cursor-pointer text-blue-500"
                  aria-hidden="true"
                  onClick={() => setIsUpVoteOutline(!isUpVoteOutline)}
                />
              )}
              <span className="mr-2 md:mr-3 text-xs md:text-sm">
                {eventData.upvotes}
              </span>
              {isDownVoteOutline ? (
                <ThumbDownIconOutline
                  className="flex-shrink-0 mr-0.25 md:mr-0.5 h-4 md:h-5 w-4 md:w-5 cursor-pointer hover:text-purple-500"
                  aria-hidden="true"
                  onClick={() => setIsDownVoteOutline(!isDownVoteOutline)}
                />
              ) : (
                <ThumbDownIconSolid
                  className="flex-shrink-0 mr-0.25 md:mr-0.5 h-4 md:h-5 w-4 md:w-5 cursor-pointer text-purple-500"
                  aria-hidden="true"
                  onClick={() => setIsDownVoteOutline(!isDownVoteOutline)}
                />
              )}
              <span className="text-xs md:text-sm">{eventData.downvotes}</span>
            </div>
          </div>
        </div>
        {/* <!-- footer --> */}
        <footer className="rounded-br-md md:rounded-b-md bg-gray-100 text-xs text-gray-600 px-4 py-0.5 md:py-2 text-right">
          {`Atualizado há ${Math.ceil(daysSinceLastUpdate)} dias`}
        </footer>
      </div>
    </div>
  );
};

export default EventCard;
