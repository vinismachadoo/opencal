import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";

const FilterTag = ({ filterName }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selected, setSelected] = useState(false);

  return (
    <div className="flex group">
      <button
        className={classNames(
          selected
            ? "text-gray-700 bg-red-200 border-red-500"
            : "text-gray-700 border-gray-700 hover:bg-green-200 hover:border-green-500",
          "flex m-1 border-2 rounded-full px-2.5 py-1 font-semibold text-xs"
        )}
        onClick={() => setSelected(!selected)}
      >
        {filterName}
        {selected ? (
          <XCircleIcon
            className="flex-shrink-0 ml-1.5 h-4 w-4 text-red-500"
            aria-hidden="true"
          />
        ) : (
          <PlusCircleIcon
            className="flex-shrink-0 ml-1.5 h-4 w-4 text-green-500"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};

export default FilterTag;
