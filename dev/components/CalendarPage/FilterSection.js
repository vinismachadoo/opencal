import {
  PlusCircleIcon,
  XCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

export const FilterTag = ({ singleFilter, allFilters, onFilterClick }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex">
      <button
        className={classNames(
          singleFilter.selected
            ? "text-gray-700 bg-red-200 border-red-500"
            : "text-gray-700 border-gray-700 hover:bg-green-200 hover:border-green-500",
          "flex m-1 border rounded-md px-2.5 py-1 font-semibold text-xs group"
        )}
        onClick={() => {
          onFilterClick(
            allFilters.map((filter) =>
              filter.id === singleFilter.id
                ? { ...filter, selected: !filter.selected }
                : filter
            )
          );
        }}
      >
        {singleFilter.name}
        {singleFilter.selected ? (
          <XCircleIcon
            className="flex-shrink-0 ml-1.5 h-4 w-4 text-red-500"
            aria-hidden="true"
          />
        ) : (
          <PlusCircleIcon
            className="flex-shrink-0 ml-1.5 h-4 w-4 text-gray-500 group-hover:text-green-500"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};

const FilterSection = ({ filters, onFilterClick }) => {
  const selectionState = filters.map((filter) => filter.selected);
  const isAtLeastOneSelected = selectionState.some((e) => e === true);
  const isAtLeastOneNotSelected = selectionState.some((e) => e === false);

  return (
    <>
      {/* Só mostar o div se tiver algum filtro selecionado */}
      {isAtLeastOneSelected && (
        <div className="text-black text-xs font-bold mt-3">
          <div className="flex">
            <ChevronRightIcon
              className="flex-shrink-0 mr-0.5 h-4 w-4 group-hover:text-green-500"
              aria-hidden="true"
            />
            Filtros Selecionados
          </div>
          <div className="border border-gray-200 bg-gray-50 rounded-md flex flex-wrap mt-1 p-1">
            {/* Mostrar filtros selecionados */}
            {filters.map(
              (filter) =>
                filter.selected && (
                  <FilterTag
                    key={filter.id}
                    allFilters={filters}
                    singleFilter={filter}
                    onFilterClick={onFilterClick}
                  />
                )
            )}
          </div>
        </div>
      )}
      {/* Só mostrar o div se tiver algum filtro não selecionado */}
      {isAtLeastOneNotSelected && (
        <div className="text-black text-xs font-bold mt-3">
          <div className="flex">
            <ChevronRightIcon
              className="flex-shrink-0 mr-0.5 h-4 w-4 group-hover:text-green-500"
              aria-hidden="true"
            />
            Filtros disponíveis
          </div>
          <div className="flex flex-wrap border border-gray-200 bg-gray-50 rounded-md mt-1 p-1">
            {/* Mostrar filtros não selecionados */}
            {filters.map(
              (filter) =>
                !filter.selected && (
                  <FilterTag
                    key={filter.id}
                    allFilters={filters}
                    singleFilter={filter}
                    onFilterClick={onFilterClick}
                  />
                )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSection;
