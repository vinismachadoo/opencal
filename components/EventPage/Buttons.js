import {
  HeartIcon,
  CashIcon,
  PencilIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";

const ButtonActions = () => {
  return (
    <>
      <span className="hidden md:block">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <PencilIcon
            className="-ml-1 mr-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          Editar
        </button>
      </span>

      <span className="hidden md:block ml-3">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <HeartIcon
            className="-ml-1 mr-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          Favoritar
        </button>
      </span>

      <span className="hidden md:block ml-3">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <CashIcon
            className="-ml-1 mr-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          Comprar
        </button>
      </span>

      <span className="md:ml-3">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <ExternalLinkIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Exportar
        </button>
      </span>
    </>
  );
};

export default ButtonActions;
