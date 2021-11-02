import {
  ThumbUpIcon,
  ThumbDownIcon,
  HeartIcon,
  LocationMarkerIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

const EventCard = () => {
  return (
    <div className="p-2 flex justify-center items-center">
      <div className="bg-white rounded-xl w-full lg:w-72 flex lg:block lg:h-auto">
        <div className="bg-black relative overflow-hidden group w-80 lg:w-full lg:max-h-40 rounded-l-xl lg:rounded-t-xl lg:rounded-bl-none">
          {/* Capa do evento */}
          <img
            src="/signin.jpg"
            alt="boy with camera"
            className="object-cover absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 group-hover:opacity-30 h-full w-full lg:relative"
          />
          {/* Hashtags */}
          <div className="lg:p-2 hidden lg:flex-row lg:group-hover:block lg:absolute lg:top-0">
            <div className="flex flex-wrap">
              <div className="m-0.5 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white font-semibold">
                #funk
              </div>
              <div className="m-0.5 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white font-semibold">
                #aberto
              </div>
              <div className="m-0.5 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white font-semibold">
                #playboy
              </div>
              <div className="m-0.5 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white font-semibold">
                #funk
              </div>
              <div className="m-0.5 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white font-semibold">
                #aberto
              </div>
              <div className="m-0.5 rounded-md bg-green-600 px-2 py-0.5 text-xs text-white font-semibold">
                #playboy
              </div>
            </div>
          </div>
          {/* Endereço */}
          <div className="p-2 hidden flex-row group-hover:block absolute bottom-0">
            <div className="flex items-center text-xs font-semibold rounded-md bg-gray-500 px-2 py-0.5 text-white">
              <LocationMarkerIcon
                className="flex-shrink-0 mr-1 h-3 w-3"
                aria-hidden="true"
              />
              <span className="line-clamp-1">Nome do local do evento</span>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- content --> */}
          <div className="p-4 border-r-2 border-t-2 rounded-tr-lg lg:border-l-2 lg:border-t-0 lg:rounded-none  border-gray-100">
            <h3 className="font-bold text-lg mb-1 line-clamp-1">
              titulo titulo titulo titulo titulo
            </h3>
            <p className="text-xs line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cum
              sit velit rerum impedit ratione vero accusantium quod ea itaque
              consequuntur, dolorum, non deleniti aliquid qui natus sint quaerat
              repudiandae?
            </p>
            <div className="flex justify-between mt-3">
              {/* Ações */}
              <div className="flex items-center text-gray-400">
                <HeartIcon
                  className="flex-shrink-0 mr-1 h-5 w-5 cursor-pointer"
                  aria-hidden="true"
                />
                <span className="mr-1 text-sm font-semibold">70</span>
                <ThumbUpIcon
                  className="flex-shrink-0 mr-1 h-5 w-5 cursor-pointer"
                  aria-hidden="true"
                />
                <span className="mr-1 text-sm font-semibold">70</span>
                <ThumbDownIcon
                  className="flex-shrink-0 mr-1 h-5 w-5 cursor-pointer"
                  aria-hidden="true"
                />
                <span className="mr-1 text-sm font-semibold">70</span>
              </div>
              <button className="rounded-lg text-xs py-1.5 px-3 bg-green-500 hover:bg-green-600 text-white hover:shadow-sm duration-300">
                <span className="flex items-center font-semibold">
                  Ver mais
                  <ArrowNarrowRightIcon className="flex-shrink-0 ml-1 h-3 w-3" />
                </span>
              </button>
            </div>
          </div>
          {/* <!-- footer --> */}
          <footer className="rounded-br-lg lg:rounded-b-lg bg-gray-100 text-xs text-gray-600 px-4 py-2 text-right">
            Atualizado há 3 dias
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
